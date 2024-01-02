import dotenv from "dotenv";

dotenv.config();

const config = {
  app: {
    port: process.env.PORT || 3000
  },
  bcrypt: {
    saltRounds: process.env.SALT_ROUNDS || 8
  },
  jwt: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || "accesstoken",
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || "refreshtoken",
    accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "1d",
    refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d"
  }
};

export default config;
