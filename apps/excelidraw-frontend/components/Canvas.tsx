import { initdraw } from "@/app/draw";
import { useEffect, useRef } from "react";

export function Canvas({roomId,socket}:{roomId:string,socket:WebSocket}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            initdraw(canvasRef.current,roomId,socket);
        }

    }, [canvasRef]
    );

    return <div><canvas ref={canvasRef} height={2000} width={1000}></canvas>;
        </div>
}