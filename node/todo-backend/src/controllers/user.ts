import { Request, Response } from "express";
import * as userService from "../services/user";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json({ users });
};
