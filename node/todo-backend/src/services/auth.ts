import bcrypt from "bcrypt";

import config from "../config";
import * as userModel from "../models/user";
import { generateAccessToken, generateTokens } from "./jwt";
import { serialize } from "../utils/user";

export const signup = async (email: string, password: string) => {
  const { saltRounds } = config.bcrypt;
  const hashedPassword = await bcrypt.hash(password, +saltRounds);
  const user = await userModel.add(email, hashedPassword);
  return serialize(user);
};

export const login = async (email: string, password: string) => {
  const user = await userModel.findByEmail(email);
  const isMatch = await bcrypt.compare(password, user?.password ?? "");
  if (!user || !isMatch) {
    return null;
  }

  const tokens = generateTokens(user.id);

  return tokens;
};

export const refreshToken = (id: string) => {
  const token = generateAccessToken(id);
  return token;
};
