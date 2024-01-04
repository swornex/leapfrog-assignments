import { Request, Response } from "express";
import * as userService from "../services/user";
import { IGetUserQuery } from "../interfaces/user";

/**
 * Retrieves all users from the database and sends them as a JSON response.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A Promise that resolves when the response is sent.
 */
export const getAllUsers = async (
  req: Request<{}, {}, {}, IGetUserQuery>,
  res: Response
) => {
  const query = req.query;
  const users = await userService.getAllUsers(query);
  res.json({ users });
};
