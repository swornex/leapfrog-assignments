import UserModel from "../models/user";

export const getAllUsers = async () => {
  const users = await UserModel.getAll();
  return users;
};
