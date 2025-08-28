import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
// import { JWT_SECRET } from "@repo/backend-common/config";
import { JWT_SECRET } from "@repo/backend-common/config";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (ws, Request) => {
  const url = Request.url;
  const queryparams = new URLSearchParams(url?.split("?")[1]);
  const token = queryparams.get("token") || "";
  const decoded = jwt.verify(token, JWT_SECRET);

  if (!decoded || !(decoded as JwtPayload).userId) {
    ws.close();
    return;
  }
  ws.on("message", (message) => {
    console.log(message);
  });
});
