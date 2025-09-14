"use client";
import { HTTP_BACKEND } from "@/config";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import axios from "axios";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function room() {
  const router = useRouter();
  const roomRef = useRef<HTMLInputElement>(null);
  const roomNameRef = useRef<HTMLInputElement>(null);
  const userIDRef = useRef<HTMLInputElement>(null);
  async function createRoom() {
    const roomName = roomNameRef.current?.value;
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please sign in to create a room");
      router.push("/signin");
      return;
    }
    await axios
      .post(
        `${HTTP_BACKEND}/room`,
        { name: roomName },
        {
          headers: {
            Authorization: `${token}`, // ✅ send token
          },
        }
      )
      .then((res) => {
        const roomId = res.data.roomId;
        router.push(`/canvas/${roomId}`);
      })
      .catch((err) => {
        console.log(err);
        alert("Room With same name exist");
      });
  }

  async function JoinRoom() {
    const slug = roomRef.current?.value;
    const adminId = userIDRef.current?.value;
   const token = localStorage.getItem("token");
   if (!token) {
     alert("Please sign in to create a room");
     router.push("/signin");
     return;
   }
   try {
     const res = await axios.post(`${HTTP_BACKEND}/user`, {
       slug,
       adminId,
     });

     const roomId = res.data.roomId;
     router.push(`/canvas/${roomId}`);
   } catch (err) {
     alert("Room not found!");
   }

  }
    const [join, setJoin] = useState(false);
  
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center bg-[#F3F3F7]">
        <div className="bg-amber-50 rounded-xl w-30% ">
<div className="flex justify-evenly w-full">
  <button
    onClick={() => {
      setJoin(false);
    }}
    className={`${
      !join
        ? "bg-amber-100  text-3xl font-bold text-center p-4 border-2 rounded w-full"
        : "text-3xl font-light bg-[#F3F3F7] text-center hover:bg-white hover:scale-105 transition-all p-4 border-2 rounded w-full cursor-pointer"
    }`}
  >
    Create Room
  </button>
  <button
    onClick={() => {
      setJoin(true);
    }}
    className={`${
      join
        ? "bg-amber-100  text-3xl font-bold text-center p-4 border-2 rounded w-full"
        : "text-3xl  font-extralight bg-[#F3F3F7] text-center hover:bg-white hover:scale-105 transition-all p-4 border-2 rounded w-full cursor-pointer"
    }`}
  >
    Join Room
  </button>
</div>

{/* Conditionally render based on join */}
{!join && (
  <div className={`p-6 m-2 rounded w-full mt-8`}>
    <div className={`p-2 text-black `}>
      <input
        ref={roomNameRef}
        className="p-2 w-96 font-bold h-12"
        type="text"
        minLength={3}
        placeholder="Enter Room Name"
        required
      />
    </div>

    <div className={`p-2 `}>
      <Button
        variant="hero"
        className="w-108 h-16 cursor-pointer text-xl mt-4"
        onClick={createRoom}
      >
        Create Room & Join
      </Button>
    </div>
  </div>
)}

   {join && (
            <div className={"p-6 m-2 rounded w-full mt-8 "}>
              <div className="p-2 text-black flex flex-col gap-4">
                <input
                  className="p-2 w-96 font-bold h-12"
                  ref={roomRef}
                  type="text"
                  minLength={3}
                  placeholder="Enter Room Name"
                  required
                />
                <input
                  ref={userIDRef}
                  className="p-2 w-96 font-bold h-12"
                  type="text"
                  placeholder="Enter Admin ID"
                  required
                />
              </div>

              <div className="p-2">
                <Button
                  variant="hero"
                  className="w-108 h-16 cursor-pointer text-xl mt-4"
                  onClick={JoinRoom}
                >
                  Join Room
                </Button>
              </div>
            </div>
          )}
</div>
      </div>
    </>
  );
}
