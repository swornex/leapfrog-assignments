import NotFoundError from "../errors/notFoundError";
import { IGetTodoQuery, ITask, IUpdateTodo } from "../interfaces/todo";
import TodoModel from "../models/todos";

/**
 * Adds a new todo with the specified title.
 *
 * @param {string} title - The title of the todo.
 * @return {Promise<any>} A promise that resolves to the newly added todo.
 */
export const addTodo = async (title: string, createdBy: number) => {
  const [data] = await TodoModel.addTodo(title, createdBy);
  return data;
};

/**
 * Retrieves all todos based on the provided filter.
 *
 * @param {IGetTodoQuery} filter - The filter to apply to the todos.
 * @return {Promise<any>} A promise that resolves with the retrieved todos.
 */
export const getAllTodos = async (filter?: IGetTodoQuery) => {
  const data = await TodoModel.getAllTodos(filter);
  return data;
};

/**
 * Updates a todo item.
 *
 * @param {IUpdateTodo} updateTodo - The updated todo item.
 * @param {string} id - The id of the todo item to be updated.
 * @return {Promise<any>} - The updated todo item.
 */
export const updateTodo = async (updateTodo: IUpdateTodo, id: string) => {
  const todo = await TodoModel.getById(id);

  if (!todo) {
    throw new NotFoundError(`Todo with id ${id} not found`);
  }

  const [data] = await TodoModel.updateTodo(updateTodo, id);
  return data;
};

/**
 * Deletes a todo item.
 *
 * @param {string} id - The id of the todo item to be deleted.
 * @return {Promise<any>} - A promise that resolves with the deleted data.
 */
export const deleteTodo = async (id: string) => {
  const todo = await TodoModel.getById(id);

  if (!todo) {
    throw new NotFoundError(`Todo with id ${id} not found`);
  }

  const [data] = await TodoModel.deleteTodo(id);
  return data;
};
