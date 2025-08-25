import express from "express";
import jwt from "jsonwebtoken";
import { JWTSECRET } from "@repo/backend_common/config";
import { middleware } from "./middleware";
import { CreateUserSchema, SigninSchema, RoomSchema } from "@repo/common/types";

const app = express();

app.post("/signup", (req, res) => {
  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    return res.status(400).json({ message: "Incorrect Inputs" });
  }
});

app.post("/signin", (req, res) => {
  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    return res.status(400).json({ message: "Incorrect Inputs" });
  }
  let userid = 1;
  const token = jwt.sign({ userid }, JWTSECRET);

  res.json({ token });
});

app.post("/room", middleware, (req, res) => {
  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    return res.status(400).json({ message: "Incorrect Inputs" });
  }
});
