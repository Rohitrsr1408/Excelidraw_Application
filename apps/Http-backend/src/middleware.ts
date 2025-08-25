import { Request, Response, NextFunction } from "express";
import { JWTSECRET } from "./config";
import jwt from "jsonwebtoken";
export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"] ?? "";
  const decoded = jwt.verify(token, JWTSECRET);
  if (decoded) {
    //@ts-ignore
    req.userId = decoded.userId;
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
