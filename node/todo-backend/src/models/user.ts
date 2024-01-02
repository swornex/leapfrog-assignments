import crypto from "crypto";
import { IUser } from "../interfaces/user";

const users: IUser[] = [
  {
    id: "4bc76e33e1",
    email: "sworstha@yopmail.com",
    password: "$2b$08$r5/B9NXySM6jZMsirjBQ.e3lRBS70Vg8JD0cTuomdIlHiUcgW7c6e"
  }
];

export const add = async (email: string, password: string): Promise<IUser> => {
  const user = await new Promise<IUser>((resolve, reject) => {
    setTimeout(() => {
      try {
        const id = crypto.randomBytes(5).toString("hex");
        const user = { id, email, password };
        users.push(user);
        resolve(user);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
  return user;
};

export const getAll = async () => {
  const userList = await new Promise<IUser[]>((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(users);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
  return userList;
};

export const findByEmail = async (email: string) => {
  const user = await new Promise<IUser | undefined>((resolve, reject) => {
    setTimeout(() => {
      try {
        const user = users.find((user) => user.email === email);
        resolve(user);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
  return user;
};
