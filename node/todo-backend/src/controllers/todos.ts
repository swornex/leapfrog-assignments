import { NextFunction, Request, Response } from "express";
import * as todosService from "../services/todos";
import { IGetTodoQuery } from "../interfaces/todo";

/**
 * Adds a new todo to the list.
 *
 * @param {Request<{}, {}, { title: string }>} req - The request object containing the todo title.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A Promise that resolves when the todo is successfully added.
 */
export const addTodo = async (
  req: Request<{}, {}, { title: string }>,
  res: Response
) => {
  const { title } = req.body;
  const data = await todosService.addTodo(title);
  res.json({ data });
};

/**
 * Retrieves all todos.
 *
 * @param {Request<{}, {}, {}, IGetTodoQuery>} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A promise that resolves to nothing.
 */
export const getAllTodos = async (
  req: Request<{}, {}, {}, IGetTodoQuery>,
  res: Response
) => {
  const data = await todosService.getAllTodos(req.query);
  res.json({ data });
};

/**
 * Updates a todo item.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @return {Promise<void>} - The updated todo item.
 */
export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body, params } = req;
    const data = await todosService.updateTodo(body, params.id);
    res.json({ data });
  } catch (e) {
    next(e);
  }
};

/**
 * Deletes a todo item.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A promise that resolves when the todo item is deleted.
 */
export const deleteTodo = async (req: Request, res: Response) => {
  const data = await todosService.deleteTodo(req.params.id);
  res.json({ data });
};
