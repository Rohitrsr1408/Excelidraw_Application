"use client";

import { WS_BACKEND } from "@/config";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@/components/Canvas";

export default function RoomCanvas({ roomId }: { roomId: string }) {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_BACKEND}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkMjUzM2UzZi0xZTBiLTQ3NmQtYTI3Ni1kYmY1YjQzMmRlY2YiLCJpYXQiOjE3NTc2ODYxNzJ9.g_fzCFMB4uRsaqKUKTrTM3Fxq2zhP6zR1JROHJZJVJY`
    );

    ws.onopen = () => {
      setSocket(ws);
      const data = JSON.stringify({
        type: "join_room",
        roomId,
      });
      console.log(data);
      ws.send(data);
    };
  }, []);

  if (!socket) {
    return <div>Connecting to server....</div>;
  }

  return (
    <div>
      <Canvas roomId={roomId} socket={socket} />
    </div>
  );
}
