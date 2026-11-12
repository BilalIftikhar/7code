"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/components/motion/utils";
import { whenIdle } from "@/components/motion/idle";

/*
 * Slow, smoky light for the hero card: a tiny WebGL fragment shader (domain-warped
 * noise) drawn at a fraction of the screen resolution and capped at 30 fps.
 * A static CSS gradient is painted first and stays for reduced motion, Save-Data,
 * or when WebGL is missing, so the hero never waits on this.
 */

const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
const FRAG = `
precision mediump float;
uniform vec2 r; uniform float t; uniform vec2 m;
float h(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=a*n(p);p=p*2.02+vec2(3.1,1.7);a*=.5;}return s;}
void main(){
  vec2 uv=gl_FragCoord.xy/r; vec2 p=(gl_FragCoord.xy-.5*r)/r.y;
  float T=t*.045;
  vec2 q=vec2(fbm(p*1.4+vec2(0.,T)),fbm(p*1.4+vec2(5.2,1.3)-T));
  vec2 w=vec2(fbm(p*1.6+2.2*q+vec2(1.7,9.2)+T*.6),fbm(p*1.6+2.2*q+vec2(8.3,2.8)-T*.4));
  float f=fbm(p*1.3+2.4*w+m*.15);
  vec3 c=vec3(.035,.04,.042);
  c=mix(c,vec3(.13,.36,.27),smoothstep(.30,.80,f)*.95);
  c=mix(c,vec3(.80,.88,.84),smoothstep(.50,.95,f*w.y*1.6)*.75);
  c+=vec3(.06,.50,.28)*pow(smoothstep(.40,.95,q.x*w.x*1.7),2.)*.75;
  // keep the left side calm and dark so the headline always reads
  c*=mix(.5,1.,smoothstep(.0,.7,uv.x));
  c*=mix(.55,1.,smoothstep(0.,.35,uv.y));
  c+=(h(gl_FragCoord.xy+fract(t)*97.)-.5)*.035;
  gl_FragColor=vec4(c,1.);
}`;

// A 64px greyscale noise tile. The previous version generated grain with an SVG
// feTurbulence filter, which the browser had to run over the whole hero on every
// paint; Lighthouse measured it as the LCP element with 1.6s of render delay.
const GRAIN = 'url("/brand/grain.png")';

export function SmokeField({ className = "" }: { className?: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const cv = canvas.current;
    if (!cv) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) return;
    const still = prefersReducedMotion();

    let raf = 0;
    let visible = true;
    let cleanup = () => {};
    const cancelIdle = whenIdle(() => {
      const gl = cv.getContext("webgl", { antialias: false, depth: false, alpha: false, powerPreference: "low-power" });
      if (!gl || gl.isContextLost()) return;
      const sh = (type: number, src: string) => {
        const s = gl.createShader(type)!;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };
      const prg = gl.createProgram()!;
      gl.attachShader(prg, sh(gl.VERTEX_SHADER, VERT));
      gl.attachShader(prg, sh(gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prg);
      if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) return;
      gl.useProgram(prg);
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prg, "p");
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      const uR = gl.getUniformLocation(prg, "r");
      const uT = gl.getUniformLocation(prg, "t");
      const uM = gl.getUniformLocation(prg, "m");

      // Smoke is soft: a quarter of the CSS size is plenty and keeps the GPU cost tiny
      const scale = 0.28;
      const resize = () => {
        const w = Math.max(2, Math.round(cv.clientWidth * scale));
        const h = Math.max(2, Math.round(cv.clientHeight * scale));
        if (cv.width !== w || cv.height !== h) {
          cv.width = w;
          cv.height = h;
          gl.viewport(0, 0, w, h);
          gl.uniform2f(uR, w, h);
        }
      };
      const ro = new ResizeObserver(resize);
      ro.observe(cv);
      resize();

      let mx = 0, my = 0, tx = 0, ty = 0;
      const onMove = (e: PointerEvent) => {
        tx = (e.clientX / window.innerWidth) * 2 - 1;
        ty = (e.clientY / window.innerHeight) * 2 - 1;
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
      io.observe(cv);

      const t0 = performance.now() - 20000;
      let last = 0;
      const draw = (now: number) => {
        raf = requestAnimationFrame(draw);
        if (!visible || document.hidden || now - last < 41) return;
        last = now;
        mx += (tx - mx) * 0.04;
        my += (ty - my) * 0.04;
        gl.uniform1f(uT, (now - t0) / 1000);
        gl.uniform2f(uM, mx, -my);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      };
      if (still) {
        gl.uniform1f(uT, 20);
        gl.uniform2f(uM, 0, 0);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      } else {
        raf = requestAnimationFrame(draw);
      }
      setLive(true);
      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        window.removeEventListener("pointermove", onMove);
        // Keep the context alive: when the visitor comes back, Next.js remounts this same
        // canvas, and a deliberately lost context would paint as a blank white panel.
      };
    }, 1200);

    return () => {
      cancelIdle();
      cleanup();
      setLive(false);
    };
  }, []);

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {/* Painted instantly; the shader fades in over it */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_78%_35%,rgba(120,170,150,0.28),transparent_70%),radial-gradient(45%_55%_at_60%_85%,rgba(22,163,74,0.22),transparent_70%),#0a0b0c]" />
      <canvas ref={canvas} className={`absolute inset-0 h-full w-full transition-opacity duration-[1600ms] ${live ? "opacity-100" : "opacity-0"}`} />
      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: GRAIN, backgroundSize: "64px 64px" }} />
    </div>
  );
}
