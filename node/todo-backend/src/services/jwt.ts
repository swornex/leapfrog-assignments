import jwt from "jsonwebtoken";
import config from "../config";

export const generateAccessToken = (id: string) => {
  const { accessTokenSecret, accessTokenExpiresIn } = config.jwt;

  const accessToken = jwt.sign({ id }, accessTokenSecret, {
    expiresIn: accessTokenExpiresIn
  });

  return accessToken;
};

export const generateRefreshToken = (id: string) => {
  const { refreshTokenSecret, refreshTokenExpiresIn } = config.jwt;

  const refreshToken = jwt.sign({ id }, refreshTokenSecret, {
    expiresIn: refreshTokenExpiresIn
  });

  return refreshToken;
};
export const generateTokens = (id: string) => {
  const accessToken = generateAccessToken(id);
  const refreshToken = generateRefreshToken(id);

  return {
    accessToken,
    refreshToken
  };
};

export const validateAccessToken = (token: string) => {
  return jwt.verify(token, config.jwt.accessTokenSecret);
};

export const validateRefreshToken = (token: string) => {
  return jwt.verify(token, config.jwt.refreshTokenSecret);
};
