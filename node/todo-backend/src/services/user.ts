import { IGetUserQuery } from "../interfaces/user";
import UserModel from "../models/user";
import { buildMeta, getPaginationOptions } from "../utils/pagination";

export const getAllUsers = async (query: IGetUserQuery) => {
  const { page, size } = query;

  const pageDetails = getPaginationOptions({ page, size });
  const userPromise = UserModel.getAll({ ...pageDetails });

  const countPromise = UserModel.countAll();

  const [users, count] = await Promise.all([userPromise, countPromise]);

  const total = count.count;
  const meta = buildMeta(total, size, page);

  return {
    data: users,
    meta
  };
};
