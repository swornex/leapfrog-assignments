import { Request, Response } from "express";

import * as authService from "../services/auth";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const data = await authService.signup(email, password);
  res.json({ data });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const data = await authService.login(email, password);
  res.json({ data });
};

export const refreshToken = (req: Request, res: Response) => {
  if (!req.userId) return res.json({ message: "userId not found" });
  const accessToken = authService.refreshToken(req.userId);
  res.json({ accessToken });
};
