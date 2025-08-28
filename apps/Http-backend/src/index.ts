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

app.post("/signin", (req, res) => {
  const data = SigninSchema.safeParse(req.body);
  if (!data.success) {
    return res.status(400).json({ message: "Incorrect Inputs" });
  }
  let userid = 1;
  const token = jwt.sign({ userid }, JWT_SECRET);

  res.json({ token });
});

app.post("/room", middleware, (req, res) => {
  const data = RoomSchema.safeParse(req.body);
  //@ts-ignore
  console.log(req.userId);
  if (!data.success) {
    return res.status(400).json({ message: "Incorrect Inputs" });
  }
});
app.listen(4040, () => {
  console.log("Server started at port 4040");
});
