import * as userModel from "../models/user";
import { serialize } from "../utils/user";

export const getAllUsers = async () => {
  const users = await userModel.getAll();
  const serializedUsers = users.map((user) => {
    return serialize(user);
  });
  return serializedUsers;
};
