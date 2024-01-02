import { Request, Response } from "express";
import * as userService from "../services/user";

/**
 * Retrieves all users from the database and sends them as a JSON response.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A Promise that resolves when the response is sent.
 */
export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json({ users });
};
