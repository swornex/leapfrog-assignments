import bcrypt from "bcrypt";

import config from "../config";
import * as userModel from "../models/user";
import { generateAccessToken, generateTokens } from "./jwt";
import { serialize } from "../utils/user";

/**
 * Signs up a user with the given email and password.
 *
 * @param {string} email
 * @param {string} password
 * @return {Promise}
 */
export const signup = async (email: string, password: string) => {
  const { saltRounds } = config.bcrypt;
  const hashedPassword = await bcrypt.hash(password, +saltRounds);
  const user = await userModel.add(email, hashedPassword);
  return serialize(user);
};

/**
 * Logs in a user with the given email and password.
 *
 * @param {string} email
 * @param {string} password
 * @return {Promise}
 */
export const login = async (email: string, password: string) => {
  const user = await userModel.findByEmail(email);
  const isMatch = await bcrypt.compare(password, user?.password ?? "");
  if (!user || !isMatch) {
    return null;
  }

  const tokens = generateTokens(user.id);

  return tokens;
};

/**
 * Generates a new access token for the given ID.
 *
 * @param {string} id
 * @return {string}
 */
export const refreshToken = (id: string) => {
  const token = generateAccessToken(id);
  return token;
};
