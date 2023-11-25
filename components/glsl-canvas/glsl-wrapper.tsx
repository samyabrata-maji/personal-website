import GLSLCanvas from "@/components/glsl-canvas/glsl-canvas";
import React from "react";
import fs from "fs";
import path from "path";

export default function GLSLWrapper() {
  let vertexShader = fs.readFileSync(
    path.join(process.cwd(), "public", "shaders", "demo.vs"),
    "utf-8",
  );
  let fragmentShader = fs.readFileSync(
    path.join(process.cwd(), "public", "shaders", "demo.frag"),
    "utf-8",
  );

  return (
    <GLSLCanvas vertexShader={vertexShader} fragmentShader={fragmentShader} />
  );
}
