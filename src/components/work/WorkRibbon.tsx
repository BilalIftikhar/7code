"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { prefersReducedMotion } from "@/components/motion/utils";

/*
 * Scroll-driven showcase for /work: two headline lines slide past each other
 * while a ribbon of live project cards sweeps around the viewer in 3D, then the
 * cards land in a 3×3 grid that links to the
 * case studies. Every card shows a real capture of the client's live site,
 * slowly scrolling, or a titled card where no capture exists.
 *
 * One number drives everything: scroll progress p (0→1) through the 600vh
 * track, eased each frame. Without WebGL, or with reduced motion, the section
 * is not shown at all and the normal case-study grid below does the work.
 */

export type RibbonItem = { slug: string; name: string; img: string };

const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => t * t * (3 - 2 * t);
const out = (t: number) => 1 - (1 - t) ** 3;
const span = (p: number, a: number, b: number) => clamp((p - a) / (b - a));

function webglOK() {
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl2") || c.getContext("webgl");
    if (!gl) return false;
    (gl as WebGLRenderingContext).getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

export function WorkRibbon({ items }: { items: RibbonItem[] }) {
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const l1 = useRef<HTMLDivElement>(null);
  const l2 = useRef<HTMLDivElement>(null);
  const cap = useRef<HTMLParagraphElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const rule = useRef<HTMLDivElement>(null);
  const nameEl = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Decided on the client only; the server renders nothing for this section
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(!prefersReducedMotion() && webglOK());
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const trackEl = track.current!, stageEl = stage.current!, cv = canvas.current!;
    let disposed = false;
    let cleanup = () => {};

    // three.js is only downloaded once the section is close to the viewport
    const io = new IntersectionObserver(
      async ([en]) => {
        if (!en.isIntersecting) return;
        io.disconnect();
        const THREE = await import("three");
        if (disposed) return;
        cleanup = start(THREE);
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(trackEl);

    function start(THREE: typeof import("three")) {
      const renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
      renderer.setClearColor(0, 0);
      renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
      const scene = new THREE.Scene();
      const FOV = 35;
      const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);

      /* ---------- ribbon rail ---------- */
      let PATH_L = 1;
      const SAMPLES = 1200, pathP: import("three").Vector3[] = [], pathT: import("three").Vector3[] = [];
      const PH0 = -1.5, PH1 = Math.PI * 2 + 1.35;
      const pts: import("three").Vector3[] = [];
      for (let i = 0; i <= 160; i++) {
        const t = i / 160, ph = mix(PH0, PH1, t), cs = Math.cos(ph), u = 2 * t - 1;
        // a shallow arc close to the camera, then long runs far behind it
        const depth = cs > 0 ? 7.6 + 16.4 * cs ** 0.9 : 7.6 + 2.2 * cs;
        const edge = 0.84 + 0.5 * span(0.14 - t, 0, 0.14) + 0.8 * span(t, 0.84, 1);
        pts.push(new THREE.Vector3(edge * Math.sin(ph) * depth * 0.561, 0.5 * Math.sign(u) * Math.abs(u) ** 1.4 * depth * 0.63, -depth));
      }
      const path = new THREE.CatmullRomCurve3(pts, false, "centripetal");
      path.arcLengthDivisions = 1500;
      PATH_L = path.getLength();
      for (let i = 0; i <= SAMPLES; i++) {
        const u = i / SAMPLES;
        pathP.push(path.getPointAt(u));
        pathT.push(path.getTangentAt(u));
      }
      const at = (s: number, op: import("three").Vector3, ot: import("three").Vector3) => {
        const f = clamp(s / PATH_L) * SAMPLES, i = Math.min(SAMPLES - 1, Math.floor(f)), k = f - i;
        op.lerpVectors(pathP[i], pathP[i + 1], k);
        ot.lerpVectors(pathT[i], pathT[i + 1], k).normalize();
      };

      /* ---------- cards ---------- */
      const CARD_W = 2.1, CARD_H = 1.32, GAP = 0.03, STEP = CARD_W + GAP, NX = 28, NY = 3;
      const vs = `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
      // Tall captures pan slowly top-to-bottom and back, like a page being scrolled
      const fs = `uniform sampler2D map;uniform vec2 fit;uniform float aspect,ready,radius,pan;varying vec2 vUv;
void main(){
  vec2 q=(abs(vUv-.5)-.5)*vec2(aspect,1.)+radius;
  float d=length(max(q,0.))+min(max(q.x,q.y),0.)-radius;
  float px=fwidth(d),a=1.-smoothstep(-px,px,d);
  if(a<.01)discard;
  vec2 uv=vUv;if(!gl_FrontFacing)uv.x=1.-uv.x;
  vec2 tuv=vec2(.5+(uv.x-.5)*fit.x, 1.-pan*(1.-fit.y)-(1.-uv.y)*fit.y);
  vec3 c=mix(vec3(.075),texture2D(map,tuv).rgb,ready);
  float edge=smoothstep(-.012-px,-.012,d);
  gl_FragColor=vec4(mix(c,vec3(1.),edge*.1),a);
}`;
      const loader = new THREE.TextureLoader();
      type Card = {
        i: number; item: RibbonItem; geo: import("three").PlaneGeometry; mat: import("three").ShaderMaterial;
        mesh: import("three").Mesh; rect: null | ReturnType<typeof grid>; tall: boolean;
      };
      const cards: Card[] = items.map((item, i) => {
        const geo = new THREE.PlaneGeometry(1, 1, NX, NY);
        const mat = new THREE.ShaderMaterial({
          vertexShader: vs, fragmentShader: fs, transparent: true, side: THREE.DoubleSide,
          uniforms: { map: { value: null }, fit: { value: new THREE.Vector2(1, 1) }, aspect: { value: CARD_W / CARD_H }, ready: { value: 0 }, radius: { value: 0.018 }, pan: { value: 0 } },
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.frustumCulled = false;
        mesh.visible = false;
        scene.add(mesh);
        const c: Card = { i, item, geo, mat, mesh, rect: null, tall: false };
        loader.load(item.img, (tex) => {
          tex.colorSpace = THREE.NoColorSpace;
          tex.minFilter = THREE.LinearFilter;
          tex.generateMipmaps = false;
          const img = tex.image as HTMLImageElement;
          const ta = img.width / img.height, ca = CARD_W / CARD_H;
          // cover: wide images crop the sides, tall images show a window that pans
          mat.uniforms.fit.value.set(ta > ca ? ca / ta : 1, ta > ca ? 1 : ta / ca);
          c.tall = ta < ca * 0.9;
          mat.uniforms.map.value = tex;
          mat.uniforms.ready.value = 1;
        });
        return c;
      });

      /* ---------- layout ---------- */
      const GZ = 8;
      let W = 1, H = 1, asp = 1, cols = 3, rows = 2, tanH = 0.3153;
      const resize = () => {
        W = stageEl.clientWidth; H = stageEl.clientHeight; asp = W / H;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(W, H, false);
        camera.aspect = asp;
        camera.fov = asp < 16 / 9 ? (Math.atan(0.561 / asp) * 360) / Math.PI : FOV;
        camera.updateProjectionMatrix();
        tanH = Math.tan((camera.fov * Math.PI) / 360);
        // every project lands: a 3×3 grid on every screen
        cols = 3;
        rows = Math.ceil(items.length / 3);
      };
      function grid(i: number) {
        const vh = 2 * GZ * tanH, vw = vh * asp, gw = vw * (asp < 0.9 ? 0.94 : asp < 1.3 ? 0.78 : 0.6), gap = gw * 0.017;
        const cw = (gw - gap * (cols - 1)) / cols, ch = cw / (CARD_W / CARD_H), gh = ch * rows + gap * 1.6 * (rows - 1);
        const c = i % cols, r = Math.floor(i / cols);
        return { x: -gw / 2 + cw / 2 + c * (cw + gap), y: gh / 2 - ch / 2 - r * (ch + gap * 1.6), w: cw, h: ch, vw, vh, c, r };
      }
      const ro = new ResizeObserver(resize);
      ro.observe(stageEl);
      resize();

      /* ---------- scroll ---------- */
      let target = 0, p = 0;
      const readScroll = () => {
        const r = trackEl.getBoundingClientRect();
        target = clamp(-r.top / (r.height - window.innerHeight));
      };
      window.addEventListener("scroll", readScroll, { passive: true });
      readScroll();
      p = target;

      /* ---------- pose ---------- */
      const op = new THREE.Vector3(), ot = new THREE.Vector3(), up = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0), vp = new THREE.Vector3();
      function poseRibbon(c: Card, head: number) {
        const pos = c.geo.attributes.position, centre = head - c.i * STEP;
        for (let iy = 0; iy <= NY; iy++)
          for (let ix = 0; ix <= NX; ix++) {
            const k = iy * (NX + 1) + ix, lu = ix / NX - 0.5, lv = 0.5 - iy / NY;
            at(centre + lu * CARD_W, op, ot);
            up.copy(Y).addScaledVector(ot, -Y.dot(ot)).normalize();
            vp.copy(op).addScaledVector(up, lv * CARD_H);
            pos.setXYZ(k, vp.x, vp.y, vp.z);
          }
        pos.needsUpdate = true;
      }
      function poseGrid(c: Card, q: number) {
        const g = grid(c.i), pos = c.geo.attributes.position;
        const dx = (g.c - (cols - 1) / 2) * 1.2, dy = g.r < rows / 2 ? 1 : -1;
        const ox = dx * g.vw * 0.62 * (1 - q), oy = dy * g.vh * (g.c === 1 ? 0.95 : 0.34) * (1 - q), tilt = (1 - q) * 0.22 * (g.c - 1 || 0.5) * dy;
        const cs = Math.cos(tilt), sn = Math.sin(tilt);
        for (let iy = 0; iy <= NY; iy++)
          for (let ix = 0; ix <= NX; ix++) {
            const k = iy * (NX + 1) + ix, x = (ix / NX - 0.5) * g.w, y = (0.5 - iy / NY) * g.h;
            pos.setXYZ(k, g.x + ox + x * cs - y * sn, g.y + oy + x * sn + y * cs, -GZ - (1 - q) * 0.6 * Math.sin((ix / NX) * Math.PI));
          }
        pos.needsUpdate = true;
        c.rect = g;
      }

      const RIB_A = 0.14, RIB_B = 0.63;
      const t0 = performance.now();
      function render() {
        const pp = p;
        const rise = 1 - out(span(pp, 0, 0.12));
        const run = mix(-50, 76, span(pp, 0, 0.58));
        l1.current!.style.transform = `translate3d(${run}vw,${rise * 34}vh,0)`;
        l2.current!.style.transform = `translate3d(${-run}vw,${rise * 34}vh,0)`;
        // the words have left by now; on narrow screens their ends would still peek in at the edge
        const hlA = String(1 - span(pp, 0.6, 0.7));
        l1.current!.style.opacity = hlA;
        l2.current!.style.opacity = hlA;
        cap.current!.style.opacity = String(1 - span(pp, 0.52, 0.57));
        cap.current!.style.transform = `translate(-50%,calc(-50% + ${rise * 34}vh))`;
        intro.current!.style.opacity = String(1 - span(pp, 0, 0.05));
        rule.current!.style.transform = `scaleX(${ease(span(pp, 0.72, 0.86))})`;
        rule.current!.style.opacity = "0";
        const time = (performance.now() - t0) / 1000;
        const pr = span(pp, RIB_A, RIB_B), head = mix(0, PATH_L + cards.length * STEP, pr);
        for (const c of cards) {
          const s = head - c.i * STEP, end = PATH_L - CARD_W;
          if (s < end) {
            c.mesh.visible = s > CARD_W;
            c.rect = null;
            if (c.mesh.visible) poseRibbon(c, head);
          } else if (c.i < cols * rows) {
            // each card flies to its slot the moment it leaves the rail
            const st = mix(RIB_A, RIB_B, (end + c.i * STEP) / (PATH_L + cards.length * STEP)), q = out(span(pp, st, st + 0.13));
            c.mesh.visible = q > 0.001;
            if (c.mesh.visible) poseGrid(c, q);
          } else {
            c.mesh.visible = false;
            c.rect = null;
          }
          if (c.mesh.visible && c.tall) c.mat.uniforms.pan.value = 0.5 - 0.5 * Math.cos(time * 0.32 + c.i * 1.7);
        }
        renderer.render(scene, camera);
      }

      /* ---------- hover + click on the final grid ---------- */
      const hitTest = (e: PointerEvent | MouseEvent) => {
        if (p <= 0.86) return null;
        const r = stageEl.getBoundingClientRect();
        const nx = (e.clientX - r.left) / W - 0.5, ny = 0.5 - (e.clientY - r.top) / H;
        for (const c of cards) {
          const g = c.rect;
          if (!g) continue;
          const x = nx * g.vw, y = ny * g.vh;
          if (Math.abs(x - g.x) < g.w / 2 && Math.abs(y - g.y) < g.h / 2) return c;
        }
        return null;
      };
      const onMove = (e: PointerEvent) => {
        const hit = hitTest(e), el = nameEl.current!;
        el.style.opacity = hit ? "1" : "0";
        stageEl.style.cursor = hit ? "pointer" : "";
        if (hit) {
          const r = stageEl.getBoundingClientRect();
          el.textContent = `${hit.item.name} — view case study`;
          el.style.transform = `translate(${e.clientX - r.left + 14}px,${e.clientY - r.top + 16}px)`;
        }
      };
      const onClick = (e: MouseEvent) => {
        const hit = hitTest(e);
        if (hit) router.push(`/work/${hit.item.slug}`);
      };
      stageEl.addEventListener("pointermove", onMove);
      stageEl.addEventListener("click", onClick);

      /* ---------- loop: only while the section is on screen ---------- */
      let raf = 0, onScreen = true;
      const vis = new IntersectionObserver(([en]) => (onScreen = en.isIntersecting));
      vis.observe(trackEl);
      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (!onScreen || document.hidden) return;
        p += (target - p) * 0.09;
        if (Math.abs(target - p) < 0.00005) p = target;
        render();
      };
      loop();

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        vis.disconnect();
        window.removeEventListener("scroll", readScroll);
        stageEl.removeEventListener("pointermove", onMove);
        stageEl.removeEventListener("click", onClick);
        cards.forEach((c) => {
          c.geo.dispose();
          c.mat.dispose();
          (c.mat.uniforms.map.value as import("three").Texture | null)?.dispose();
        });
        renderer.dispose();
      };
    }

    return () => {
      disposed = true;
      io.disconnect();
      cleanup();
    };
  }, [enabled, items, router]);

  if (!enabled) return null;

  return (
    <div ref={track} className="wr-track" aria-label="Project showcase">
      <div ref={stage} className="wr-stage">
        <h2 aria-label="Selected work">
          <div className="wr-hl wr-l1" ref={l1} aria-hidden="true">
            <span>SELECTED</span>
          </div>
          <div className="wr-hl wr-l2" ref={l2} aria-hidden="true">
            <span>WORK</span>
          </div>
        </h2>
        <p className="wr-cap" ref={cap}>
          Real projects for real businesses.
        </p>
        <div ref={intro} aria-hidden="true">
          <div className="wr-glow" />
          <div className="wr-cross">
            <i>+</i>
          </div>
        </div>
        <div className="wr-rule" ref={rule} aria-hidden="true" />
        <canvas ref={canvas} className="wr-gl" aria-hidden="true" />
        <div className="wr-bot">
          <p>Websites, platforms and search work for businesses in the UAE, Oman, the UK and Pakistan.</p>
          <div className="wr-mid">
            WEBSITES<s>/</s>PLATFORMS<s>/</s>ECOMMERCE<s>/</s>SEO
          </div>
          <a className="wr-r" href="#case-studies">
            ALL CASE STUDIES
          </a>
        </div>
        <div className="wr-name" ref={nameEl} aria-hidden="true" />
      </div>
    </div>
  );
}
