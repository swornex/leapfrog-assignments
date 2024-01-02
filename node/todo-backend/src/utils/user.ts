import { IUser, IUserWithoutPassword } from "../interfaces/user";

/**
 * Serializes a user object by removing the password field.
 *
 * @param {IUser} user - The user object to be serialized.
 * @return {IUserWithoutPassword} The serialized user object without the password field.
 */
export const serialize = (user: IUser) => {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};
