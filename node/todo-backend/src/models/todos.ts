import fs from "fs/promises";
import crypto from "crypto";

import { IGetTodoQuery, IUpdateTodo } from "../interfaces/todo";
import BaseModel from "./baseModel";

export default class TodoModel extends BaseModel {
  static async addTodo(title: string, createdBy: number) {
    return this.queryBuilder()
      .insert({
        title,
        createdBy
      })
      .into("todos")
      .returning("*");
  }
  static async getAllTodos(filter: IGetTodoQuery = {}) {
    let query = this.queryBuilder().select("*").from("todos");

    if (filter.search) {
      query.where("title", "like", `%${filter.search}%`);
    }

    if (filter.status) {
      filter.status === "completed"
        ? query.where("isCompleted", true)
        : query.where("isCompleted", false);
    }

    return query;
  }

  static async getById(id: string) {
    return this.queryBuilder().select("*").from("todos").where({ id }).first();
  }

  static async updateTodo(updateTodo: IUpdateTodo, id: string) {
    return this.queryBuilder()
      .update(updateTodo)
      .table("todos")
      .where({ id })
      .returning("*");
  }

  static async deleteTodo(id: string) {
    return this.queryBuilder()
      .table("todos")
      .where({ id })
      .del()
      .returning("*");
  }
}
