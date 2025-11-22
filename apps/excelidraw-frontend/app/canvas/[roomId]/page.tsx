import RoomCanvas from "@/components/RoomCanvas";
import type { Metadata } from "next";

interface CanvasPageProps {
  params: {
    roomId: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

export const metadata: Metadata = {
  title: "Excelidraw Canvas Room",
};

// Keep async (your original behavior) but DO NOT await params
export default async function CanvasPage({ params }: CanvasPageProps) {
  // No await needed; params is NOT a Promise
  const roomId = params.roomId;

  return <RoomCanvas roomId={roomId} />;
}
