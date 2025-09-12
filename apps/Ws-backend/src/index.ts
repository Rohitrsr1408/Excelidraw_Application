import { WebSocket, WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
// import { JWT_SECRET } from "@repo/backend-common/config";
import { JWT_SECRET } from "@repo/backend-common/config";
import { prismaClient } from "@repo/db/client";
const wss = new WebSocketServer({ port: 8080 });

interface User {
  ws: WebSocket;
  rooms: string[];
  UserId: string;
}

const users: User[] = [];
function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded == "string") {
      return null;
    }
    if (!decoded || !decoded.userId) {
      return null;
    }
    console.log(token);
    return decoded.userId;
  } catch (e) {
    return null;
  }
}
wss.on("connection", (ws, Request) => {
  const url = Request.url;
  const queryparams = new URLSearchParams(url?.split("?")[1]);
  const token = queryparams.get("token") || "";
  const UserId = checkUser(token);
  if (UserId == null) {
    ws.close();
    return null;
  }
  users.push({
    UserId,
    rooms: [],
    ws,
  });
  ws.on("message", async (message) => {
    let parsedData;
    if (typeof message !== "string") {
      parsedData = JSON.parse(message.toString());
    } else {
      parsedData = JSON.parse(message); // {type: "join-room", roomId: 1}
    } //{type:"join-room",roomId:1}
    console.log(parsedData);
    if (parsedData.type === "join_room") {
      const user = users.find((x) => x.ws === ws);

      user?.rooms.push(parsedData.roomId);
    }
    if (parsedData.type === "leave_room") {
      const user = users.find((x) => x.ws === ws);
      if (!user) return;
      user.rooms = user?.rooms.filter((x) => x === parsedData.roomId);
    }
    if (parsedData.type === "chat") {
      const roomId = parsedData.roomId;
      const message = parsedData.message;
      //console.log(roomId, UserId, message, UserId);
      await prismaClient.chat.create({
        data: {
          roomId: Number(roomId),
          message,
          userId: UserId,
        },
      });

      users.forEach((user) => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(
            JSON.stringify({
              type: "chat",
              message: message,
              roomId,
            })
          );
        }
      });
    }
  });
});
