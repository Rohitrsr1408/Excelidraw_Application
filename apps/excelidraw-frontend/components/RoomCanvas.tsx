"use client";

import { WS_BACKEND } from "@/config";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@/components/Canvas";

export default function RoomCanvas({ roomId }: { roomId: string }) {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_BACKEND}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlZjA5MGM3OS1hOWM5LTQ2ZWItOWQ2OS0yMmI3ZTk1ZjU5YWEiLCJpYXQiOjE3NTY3MDA2ODF9.h3rf96SKlKFZlO8dbTCu-mtKgV32xUQhDB7aYNVeeNg`
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
