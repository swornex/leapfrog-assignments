import crypto from "crypto";
import BaseModel from "./baseModel";
import { IUser } from "../interfaces/user";

export default class UserModel extends BaseModel {
  static async getAll(params: { offset: number; limit: number }) {
    const query = this.queryBuilder()
      .select({ id: "id", email: "email" })
      .from("users");

    query.offset(params.offset).limit(params.limit);

    return query;
  }

  static countAll() {
    return this.queryBuilder().table("users").count({ count: "id" }).first();
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
