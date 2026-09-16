import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) {
    v += a * snoise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 p = uv * vec2(aspect, 1.0);

  vec2 mouse = (uMouse - 0.5) * 0.18;
  float t = uTime * 0.045;

  vec2 q = p * 1.15 + vec2(t * 0.22, t * 0.08);
  q += mouse;

  float n1 = fbm(q + vec2(0.0, t * 0.35));
  float n2 = fbm(q * 1.35 + vec2(n1 * 0.55, t * 0.18));
  float flow = n1 * 0.55 + n2 * 0.45;

  vec3 pale = vec3(0.90, 0.96, 1.0);
  vec3 cyan = vec3(0.45, 0.78, 0.98);
  vec3 mid = vec3(0.18, 0.52, 0.92);
  vec3 deep = vec3(0.08, 0.28, 0.72);
  vec3 navy = vec3(0.05, 0.16, 0.52);

  float x = uv.x + flow * 0.18;
  float y = uv.y + flow * 0.08;

  vec3 col = mix(pale, cyan, smoothstep(0.08, 0.42, x + y * 0.15));
  col = mix(col, mid, smoothstep(0.28, 0.68, x));
  col = mix(col, deep, smoothstep(0.52, 0.92, x + (1.0 - y) * 0.12));
  col = mix(col, navy, smoothstep(0.78, 1.08, x));

  float highlight = smoothstep(0.55, 0.0, length(uv - vec2(0.22, 0.12)));
  col = mix(col, pale, highlight * 0.35);

  float bands = 0.04 * sin(uv.x * 28.0 + flow * 1.4);
  col += bands * vec3(0.06, 0.1, 0.16);

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const info = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error(info);
    }
    return shader;
}

const FluidBackground = () => {
    const canvasRef = useRef(null);
    const wrapRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const wrap = wrapRef.current;
        if (!canvas || !wrap) return;

        const gl = canvas.getContext("webgl", {
            alpha: false,
            antialias: false,
            depth: false,
            stencil: false,
            powerPreference: "low-power",
        });
        if (!gl) return;

        const program = gl.createProgram();
        const vs = compile(gl, gl.VERTEX_SHADER, VERT);
        const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            return;
        }
        gl.useProgram(program);

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
            gl.STATIC_DRAW
        );
        const loc = gl.getAttribLocation(program, "aPosition");
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

        const uResolution = gl.getUniformLocation(program, "uResolution");
        const uTime = gl.getUniformLocation(program, "uTime");
        const uMouse = gl.getUniformLocation(program, "uMouse");

        const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
        let inView = true;
        let pageVisible = document.visibilityState !== "hidden";
        let reduced =
            typeof window.matchMedia === "function" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let raf = 0;
        let start = performance.now();

        const isActive = () => inView && pageVisible;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const { width, height } = wrap.getBoundingClientRect();
            const w = Math.max(1, Math.floor(width * dpr));
            const h = Math.max(1, Math.floor(height * dpr));
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
            }
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(uResolution, canvas.width, canvas.height);
        };

        const draw = (now) => {
            mouse.x += (mouse.tx - mouse.x) * 0.04;
            mouse.y += (mouse.ty - mouse.y) * 0.04;
            gl.uniform1f(uTime, (now - start) * 0.001);
            gl.uniform2f(uMouse, mouse.x, mouse.y);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        };

        const loop = (now) => {
            if (!isActive()) return;
            draw(now);
            if (!reduced) raf = requestAnimationFrame(loop);
        };

        const onPointer = (e) => {
            const rect = wrap.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            mouse.tx = (e.clientX - rect.left) / rect.width;
            mouse.ty = 1 - (e.clientY - rect.top) / rect.height;
        };

        const startLoop = () => {
            cancelAnimationFrame(raf);
            if (isActive()) {
                raf = requestAnimationFrame(loop);
            }
        };

        const onVisibility = () => {
            pageVisible = document.visibilityState !== "hidden";
            startLoop();
        };

        const io = new IntersectionObserver(
            ([entry]) => {
                inView = entry.isIntersecting;
                startLoop();
            },
            { threshold: 0.05 }
        );

        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onMotion = () => {
            reduced = mq.matches;
            cancelAnimationFrame(raf);
            if (reduced) {
                draw(performance.now());
            } else {
                startLoop();
            }
        };

        resize();
        draw(performance.now());
        if (!reduced) raf = requestAnimationFrame(loop);

        const ro = new ResizeObserver(resize);
        ro.observe(wrap);

        window.addEventListener("resize", resize);
        window.addEventListener("pointermove", onPointer, { passive: true });
        document.addEventListener("visibilitychange", onVisibility);
        io.observe(wrap);
        mq.addEventListener?.("change", onMotion);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onPointer);
            document.removeEventListener("visibilitychange", onVisibility);
            mq.removeEventListener?.("change", onMotion);
            io.disconnect();
            gl.deleteBuffer(buffer);
            gl.deleteProgram(program);
            gl.deleteShader(vs);
            gl.deleteShader(fs);
        };
    }, []);

    return (
        <div
            ref={wrapRef}
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            aria-hidden
        >
            <canvas ref={canvasRef} className="h-full w-full block" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-56 lg:h-72 bg-gradient-to-t from-background from-[20%] via-background/70 to-transparent" />
        </div>
    );
};

export default FluidBackground;
