// Vanilla three.js scene for the hero: a glossy extruded "7" with orbiting particles.
// Loaded lazily (dynamic import) so three.js never blocks the first paint.
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export type SevenSceneHandle = {
  setPointer: (x: number, y: number) => void; // -1..1
  setScroll: (p: number) => void; // 0..1 progress through the hero
  setActive: (on: boolean) => void;
  dispose: () => void;
};

export function createSevenScene(
  canvas: HTMLCanvasElement,
  opts: { reducedMotion: boolean; lowPower: boolean },
): SevenSceneHandle {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !opts.lowPower, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, opts.lowPower ? 1.25 : 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = env;

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  // --- The "7_" code mark -----------------------------------------------
  // Drawn on a 114 x 120 grid (y down) and mirrored into three's y-up space:
  // a 7 plus a terminal cursor typed on the same front plane.
  const shapeOf = (pts: [number, number][]) => new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, -y)));
  const bevel = { bevelEnabled: true, bevelSegments: opts.lowPower ? 3 : 8, curveSegments: 4 };
  const S = 0.026;

  const geo = new THREE.ExtrudeGeometry(
    shapeOf([[0, 0], [100, 0], [100, 17], [51, 120], [29, 120], [76, 19], [0, 19]]),
    { ...bevel, depth: 26, bevelThickness: 4, bevelSize: 3 },
  );
  geo.translate(-57, 60, -13);
  geo.scale(S, S, S);
  const mat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#1f1f22"),
    metalness: 0.55,
    roughness: 0.22,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    iridescence: 0.45,
    iridescenceIOR: 1.35,
    iridescenceThicknessRange: [180, 620],
    envMapIntensity: 1.25,
  });
  const seven = new THREE.Mesh(geo, mat);

  const cursorGeo = new THREE.ExtrudeGeometry(
    shapeOf([[74, 108], [114, 108], [114, 120], [74, 120]]),
    { ...bevel, depth: 10, bevelThickness: 2, bevelSize: 1.5 },
  );
  cursorGeo.translate(-57, 60, 3); // front face flush with the 7's
  cursorGeo.scale(S, S, S);
  // Kept out of tone mapping so it reads as the exact brand green, not a washed pastel
  const cursorMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#00752d"),
    emissive: new THREE.Color("#005a22"),
    emissiveIntensity: 0.08,
    metalness: 0.05,
    roughness: 0.55,
    clearcoat: 0.3,
    envMapIntensity: 0.25,
    toneMapped: false,
  });
  const cursor = new THREE.Mesh(cursorGeo, cursorMat);

  const group = new THREE.Group();
  group.add(seven, cursor);
  scene.add(group);

  // --- Particles: a slow orbit of fine points ---------------------------
  const count = opts.lowPower ? 220 : 520;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 2.6 + Math.random() * 1.9;
    const a = Math.random() * Math.PI * 2;
    positions[i * 3] = Math.cos(a) * r;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 3.2;
    positions[i * 3 + 2] = Math.sin(a) * r * 0.55;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({ color: "#222222", size: 0.022, transparent: true, opacity: 0.55, depthWrite: false }),
  );
  scene.add(particles);

  // Key + rim lights shape the bevels; the environment does the reflections
  const key = new THREE.DirectionalLight("#ffffff", 2.2);
  key.position.set(3, 4, 5);
  const rim = new THREE.DirectionalLight("#cfd6ff", 1.4);
  rim.position.set(-4, -2, -3);
  scene.add(key, rim, new THREE.AmbientLight("#ffffff", 0.25));

  // --- State ------------------------------------------------------------
  const pointer = { x: 0, y: 0 };
  const smooth = { x: 0, y: 0, s: 0 };
  let scroll = 0;
  let active = true;
  let raf = 0;
  const t0 = performance.now();

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  const render = () => {
    const t = (performance.now() - t0) / 1000;
    const k = opts.reducedMotion ? 1 : 0.06;
    smooth.x += (pointer.x - smooth.x) * k;
    smooth.y += (pointer.y - smooth.y) * k;
    smooth.s += (scroll - smooth.s) * (opts.reducedMotion ? 1 : 0.08);

    const idle = opts.reducedMotion ? 0 : t;
    group.rotation.y = -0.45 + smooth.x * 0.55 + Math.sin(idle * 0.45) * 0.12 + smooth.s * Math.PI * 0.9;
    group.rotation.x = 0.12 - smooth.y * 0.35 + Math.cos(idle * 0.38) * 0.05;
    group.rotation.z = -0.05 + smooth.s * 0.25;
    group.position.y = Math.sin(idle * 0.8) * 0.08 + smooth.s * 1.2;
    // Terminal blink: on for ~0.53s, off for ~0.53s
    cursor.visible = opts.reducedMotion || Math.floor(t * 1.9) % 2 === 0;
    particles.rotation.y = idle * 0.05 + smooth.x * 0.2;
    particles.rotation.x = smooth.y * 0.1;

    renderer.render(scene, camera);
  };

  const loop = () => {
    raf = 0;
    if (!active) return;
    render();
    if (!opts.reducedMotion) raf = requestAnimationFrame(loop);
  };
  loop();

  return {
    setPointer(x, y) {
      pointer.x = x;
      pointer.y = y;
    },
    setScroll(p) {
      scroll = p;
      if (opts.reducedMotion) render();
    },
    setActive(on) {
      if (on === active) return;
      active = on;
      if (on && !raf) loop();
    },
    dispose() {
      active = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      geo.dispose();
      mat.dispose();
      cursorGeo.dispose();
      cursorMat.dispose();
      pGeo.dispose();
      env.dispose();
      pmrem.dispose();
      renderer.dispose();
    },
  };
}
