import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { validateAccessToken, validateRefreshToken } from "../services/jwt";

export const accessAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw new Error();

    const token = authorization.split(" ")[1];

    if (!token) throw new Error();

    const isValidToken = validateAccessToken(token);
    console.log({ isValidToken });

    if (!isValidToken) throw new Error();

    next();
  } catch (e) {
    res.status(401).json({ error: "Unauthorized" });
  }
};

export const refreshAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw new Error();

    const token = authorization.split(" ")[1];

    if (!token) throw new Error();

    const isValidToken = validateRefreshToken(token);

    if (!isValidToken) throw new Error();

    if (typeof isValidToken !== "string") {
      req.userId = isValidToken.id;
    }

    next();
  } catch (e) {
    res.status(401).json({ error: "Unauthorized" });
  }
};
