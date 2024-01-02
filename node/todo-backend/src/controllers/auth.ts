import { Request, Response } from "express";

import * as authService from "../services/auth";

/**
 * Sign up a user with the provided email and password.
 *
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<void>}
 */
export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const data = await authService.signup(email, password);
  res.json({ data });
};

/**
 * Authenticates a user by logging them in.
 *
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<void>}

 */
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const data = await authService.login(email, password);
  res.json({ data });
};

/**
 * Refreshes the access token for the authenticated user.
 *
 * @param {Request} req
 * @param {Response} res
 * @return {void}
 */
export const refreshToken = (req: any, res: Response) => {
  if (!req.userId) return res.json({ message: "userId not found" });
  const accessToken = authService.refreshToken(req.userId);
  res.json({ accessToken });
};
