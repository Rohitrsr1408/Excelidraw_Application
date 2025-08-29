"use client";
import { useEffect, useState } from "react";
import { useSocket } from "../../hooks/useSocket";

export function ChatRoomClient({
  messages,
  id,
}: {
  messages: { message: string }[];
  id: string;
}) {
  const { socket, loading } = useSocket();
  const [currentmsg, setCurrentmsg] = useState("");
  const [chats, setChats] = useState(messages);
  useEffect(() => {
    if (socket && !loading) {
      socket.send(
        JSON.stringify({
          type: "join_room",
          roomId: id,
        })
      );
      socket.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        if (parsedData.type === "chat") {
          setChats((c) => [...c, { message: parsedData.message }]);
        }
      };
    }
  }, [socket, loading, id]);
  return (
    <div>
      {chats.map((m) => (
        <div>{m.message}</div>
      ))}
      <input
        type="text"
        value={currentmsg}
        placeholder="Type your message.."
        onChange={(e) => {
          setCurrentmsg(e.target.value);
        }}
      />
      <button
        onClick={() => {
          socket?.send(
            JSON.stringify({
              type: "chat",
              roomId: id,
              message: currentmsg,
            })
          );

          setCurrentmsg("");
        }}
      >
        Send message
      </button>
    </div>
  );
}
