"use client";

import { useEffect, useRef, useState } from "react";

function linkShader(
  program: WebGLProgram,
  renderingCtx: WebGL2RenderingContext,
  shader: WebGLShader | null,
  source: string,
) {
  if (!shader) return;

  renderingCtx.shaderSource(shader, source);
  renderingCtx.compileShader(shader);

  // let status = gl.getShaderParameter(shaderObj, gl.COMPILE_STATUS);
  // if (!status) alert(gl.getShaderInfoLog(shaderObj));

  renderingCtx.attachShader(program, shader);
  renderingCtx.linkProgram(program);
}

export default function GLSLCanvas({
  vertexShader,
  fragmentShader,
}: {
  vertexShader: string;
  fragmentShader: string;
}) {
  const canvas = useRef<HTMLCanvasElement>(null!);

  let inPos: number | null;
  let iTime: WebGLUniformLocation | null;
  let iMouse: WebGLUniformLocation | null;
  let iResolution: WebGLUniformLocation | null;

  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);

  let gl: WebGL2RenderingContext | null = null;
  let bufObj: any = {};
  let program: any;

  useEffect(() => {
    gl = canvas.current.getContext("webgl2");

    if (!gl) {
      alert("Your browser does not support WebGL");
      return;
    }

    program = gl.createProgram();

    if (!program) return;

    linkShader(program, gl, gl.createShader(gl.VERTEX_SHADER), vertexShader);
    linkShader(
      program,
      gl,
      gl.createShader(gl.FRAGMENT_SHADER),
      fragmentShader,
    );

    // status = gl.getProgramParameter(program, gl.LINK_STATUS);
    // if (!status) alert(gl.getProgramInfoLog(program));

    inPos = gl.getAttribLocation(program, "inPos");
    iTime = gl.getUniformLocation(program, "iTime");
    iMouse = gl.getUniformLocation(program, "iMouse");
    iResolution = gl.getUniformLocation(program, "iResolution");

    gl.useProgram(program);

    let pos = [-1, -1, 1, -1, 1, 1, -1, 1];
    let inx = [0, 1, 2, 0, 2, 3];

    bufObj.pos = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufObj.pos);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pos), gl.STATIC_DRAW);
    bufObj.inx = gl.createBuffer();
    bufObj.inx.len = inx.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufObj.inx);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(inx),
      gl.STATIC_DRAW,
    );
    gl.enableVertexAttribArray(inPos);
    gl.vertexAttribPointer(inPos, 2, gl.FLOAT, false, 0, 0);

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    window.onresize = resize;
    resize();
    requestAnimationFrame(render);
  }, []);

  function resize() {
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
  }

  function render(deltaMS: number) {
    if (gl) {
      gl.viewport(0, 0, canvas.current.width, canvas.current.height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniform1f(iTime, deltaMS / 1000.0);
      gl.uniform2f(iResolution, canvas.current.width, canvas.current.height);
      gl.uniform2f(iMouse, mouseX, mouseY);
      gl.drawElements(gl.TRIANGLES, bufObj.inx.len, gl.UNSIGNED_SHORT, 0);
    }
    requestAnimationFrame(render);
  }

  return (
    <canvas
      ref={canvas}
      onMouseMove={(e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
      }}
    ></canvas>
  );
}
