"use client";
import { Copy, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { HTTP_BACKEND } from "@/config";
import { useState } from "react";
import toast from "react-hot-toast"; // ✅ import toast directly

function Sidebar({ roomId }: { roomId: string }) {
  const [toggle, setToggle] = useState(false);
  const [sideopen, setSideopen] = useState(false);
  const [adminid, setAdminid] = useState("");
  const [roomname, setRoomname] = useState("");

  const Logout = () => {
    localStorage.removeItem("token");
    toast.success("You have been successfully logged out ✅");
    window.location.href = "/signin";
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`"${text}" copied to clipboard ✅`);
  };

  const Share = async () => {
    try {
      const response = await axios.post(`${HTTP_BACKEND}/adminId`, {
        roomId: roomId,
      });
      const { adminId, slug } = response.data;
      setAdminid(adminId);
      setRoomname(slug);
      setSideopen(!sideopen);
    } catch (error) {
      toast.error("Failed to fetch admin ID or room name ❌");
    }
  };

  return (
    <div className="absolute top-4 right-4 z-50">
      <MenuIcon
        onClick={() => {
          setSideopen(false);
          setToggle(!toggle);
        }}
        className="cursor-pointer bg-amber-500 "
      />
      <div
        className={`h-40 w-40 fixed right-10 top-10  text-black bg-white rounded flex flex-col  justify-evenly items-center border-2 border-black shadow-lg ${toggle ? "block" : "hidden"} transition-all ${sideopen ? "h-88 w-88" : ""}`}
      >
        <Button variant="hero" className="w-[80%]" onClick={Share}>
          Share
        </Button>
        <div className={`${sideopen ? "block" : "hidden"}`}>
          <div className="p-4 space-y-4">
            {/* Admin ID */}
            <h1>Admin ID</h1>
            <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
              <span className="text-sm font-mono">{adminid}</span>
              <button
                onClick={() => copyToClipboard(adminid)}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <Copy size={16} />
              </button>
            </div>
            <h1>Room</h1>
            <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
              <span className="text-sm font-mono">{roomname}</span>
              <button
                onClick={() => copyToClipboard(roomname)}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
        </div>
        <Button
          onClick={Logout}
          className="text-red-500 hover:bg-red-500 hover:text-white hover:scale-110 transition-all cursor-pointer"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
export default Sidebar;
