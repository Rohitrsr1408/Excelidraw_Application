import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxZDkyOWYwZi1hYTVjLTQ0YTItODFhNS1lZWM0ZDJiMjUxZGMiLCJpYXQiOjE3NTY0MTY5Njh9.aGbGjLhdXhxDjHe246Cnrc6g23Rh2xVugaM3IBOGJvo`
    );
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws);
    };
  }, []);
  return {
    socket,
    loading,
  };
}
