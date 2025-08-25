import express from "express";
import jwt from "jsonwebtoken";
import { JWTSECRET } from "./config";
import { middleware } from "./middleware";
const app = express();

app.post("/signup", (req, res) => {});

app.post("/signin", (req, res) => {
  let userid = 1;
  const token = jwt.sign({ userid }, JWTSECRET);

  res.json({ token });
});

app.post("/room", middleware, (req, res) => {});
