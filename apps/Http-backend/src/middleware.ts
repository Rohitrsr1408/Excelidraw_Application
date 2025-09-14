import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt from "jsonwebtoken";
export function middleware(req: Request, res: Response, next: NextFunction) {
  console.log(req);
  const token = req.headers["authorization"] ?? "";
  const decoded = jwt.verify(token, JWT_SECRET);
  if (decoded) {
    //@ts-ignore
    req.userId = decoded.userId;
    console.log("yes");
    next();
  } else {
    console.log("no");
    res.status(401).json({ message: "Unauthorized" });
  }
}
