import { Request, Response } from "express";

export const addTodo = (req: Request, res: Response) => {
  res.json({ message: "add todo" });
};

export const getTodos = (req: Request, res: Response) => {
  res.json({ message: "get todos" });
};

export const updateTodo = (req: Request, res: Response) => {
  res.json({ message: "update todo" });
};

export const deleteTodo = (req: Request, res: Response) => {
  res.json({ message: "delete todo" });
};
