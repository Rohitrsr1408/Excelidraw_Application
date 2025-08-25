import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWTSECRET } from "./config";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (ws, Request) => {
  const url = Request.url;
  const queryparams = new URLSearchParams(url?.split("?")[1]);
  const token = queryparams.get("token") || "";
  const decoded = jwt.verify(token, JWTSECRET);

  if (!decoded || !(decoded as JwtPayload).userId) {
    ws.close();
    return;
  }
  ws.on("message", (message) => {
    console.log(message);
  });
});
