"use client";

import initdraw from "@/app/draw";
import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      initdraw(canvas);
    }
  }, [canvasRef]);

  return (
    <div>
      <canvas ref={canvasRef} height={2000} width={1000}></canvas>
    </div>
  );
}
