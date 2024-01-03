import crypto from "crypto";
import BaseModel from "./baseModel";
import { IUser } from "../interfaces/user";

export default class UserModel extends BaseModel {
  static async getAll() {
    return this.queryBuilder()
      .select({ id: "id", title: "title" })
      .from("users");
  }

  static async getByEmail(email: string) {
    return this.queryBuilder()
      .select("*")
      .from("users")
      .where({ email })
      .first();
  }

  static async create(email: string, password: string) {
    return this.queryBuilder()
      .insert({ email, password })
      .table<IUser>("users")
      .returning("*");
  }
}
