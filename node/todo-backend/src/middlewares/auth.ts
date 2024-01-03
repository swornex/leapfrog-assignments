import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { validateAccessToken, validateRefreshToken } from "../services/jwt";
import UnauthenticatedError from "../errors/unauthenticatedError";

/**
 * Middleware function that checks if the request has a valid access token in the authorization header.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function to be called.
 * @return {void}
 */
export const accessAuth = (req: any, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw new Error();

    const token = authorization.split(" ")[1];

    if (!token) throw new Error();

    const isValidToken = validateAccessToken(token);

    if (!isValidToken) throw new Error();

    if (typeof isValidToken !== "string") {
      req.userId = isValidToken.id;
    }

    next();
  } catch (e) {
    res.status(401).json({ error: "Unauthorized" });
  }
};

/**
 * Middleware function to refresh authentication.
 *
 * @param {any} req - the request object
 * @param {Response} res - the response object
 * @param {NextFunction} next - the next middleware function
 * @return {void}
 */
export const refreshAuth = (req: any, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw new Error();

    const token = authorization.split(" ")[1];

    if (!token) throw new UnauthenticatedError("No access token");

    const isValidToken = validateRefreshToken(token);

    if (!isValidToken) throw new UnauthenticatedError("Token is not valid");

    if (typeof isValidToken !== "string") {
      req.userId = isValidToken.id;
    }

    next();
  } catch (e) {
    next(e);
  }
};
