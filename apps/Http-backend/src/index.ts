import express from "express";
import jwt from "jsonwebtoken";
// import { JWT_SECRET } from "@repo/backend-common/config";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware.js";

import { CreateUserSchema, SigninSchema, RoomSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";
const app = express();
app.use(express.json());
app.post("/signup", async (req, res) => {
  const parseddata = CreateUserSchema.safeParse(req.body);
  if (!parseddata.success) {
    console.log(parseddata.error);
    return res.status(400).json({ message: "Incorrect Inputs" });
  }
  try {
    const user = await prismaClient.user.create({
      data: {
        email: parseddata.data?.username,
        password: parseddata.data.password,
        name: parseddata.data.name,
      },
    });
    res.json({
      userId: user.id,
    });
  } catch (error) {
    res.status(411).json({ message: "Something went wrong" });
  }
});

app.post("/signin", async (req, res) => {
  const parsedData = SigninSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({ message: "Incorrect Inputs" });
  }
  const User = await prismaClient.user.findFirst({
    where: {
      email: parsedData.data.username,
      password: parsedData.data.password,
    },
  });
  if (!User) {
    res.status(403).json({
      message: "Not Authorized",
    });
  }
  const token = jwt.sign({ userId: User?.id }, JWT_SECRET);

  res.json({ token });
});

app.post("/room", middleware, async (req, res) => {
  const parsedData = RoomSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({ message: "Incorrect Inputs" });
  }
  const userId = (req as any).userId;

  try {
    const room = await prismaClient.room.create({
      data: {
        slug: parsedData.data.name,
        adminId: userId,
      },
    });
    res.json({
      roomId: room?.id,
    });
  } catch (error) {
    res.status(411).json({ message: "Room with same name exist" });
  }
});
app.get("/chats/:roomId", async (req, res) => {
  try {
    const roomId = Number(req.params.roomId);
    console.log(req.params.roomId);
    const messages = await prismaClient.chat.findMany({
      where: {
        roomId: roomId,
      },
      orderBy: {
        id: "desc",
      },
      take: 1000,
    });

    res.json({
      messages,
    });
  } catch (e) {
    console.log(e);
    res.json({
      messages: [],
    });
  }
});
app.listen(4040, () => {
  console.log("Server started at port 4040");
});
