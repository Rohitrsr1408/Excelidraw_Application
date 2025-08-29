"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useState } from "react";
export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]  ">
      <div className=" ">
        <input
          className="p-2 m-2"
          type="text"
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
          placeholder="Room Id"
        />
        <button
          className="p-2 border-2 border-white rounded hover:scale-110"
          onClick={() => {
            router.push(`/room/${roomId}`);
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
