export type IUser = {
  id: string;
  email: string;
  password: string;
};

export type IUserWithoutPassword = {
  id: string;
  email: string;
};
