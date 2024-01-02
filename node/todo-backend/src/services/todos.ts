import { IGetTodoQuery, ITask, IUpdateTodo } from "../interfaces/todo";
import * as todosModel from "../models/todos";

/**
 * Adds a new todo with the specified title.
 *
 * @param {string} title - The title of the todo.
 * @return {Promise<any>} A promise that resolves to the newly added todo.
 */
export const addTodo = async (title: string) => {
  const data = await todosModel.addTodo(title);
  return data;
};

/**
 * Retrieves all todos based on the provided filter.
 *
 * @param {IGetTodoQuery} filter - The filter to apply to the todos.
 * @return {Promise<any>} A promise that resolves with the retrieved todos.
 */
export const getAllTodos = async (filter?: IGetTodoQuery) => {
  const data = await todosModel.getAllTodos(filter);
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
  const data = await todosModel.updateTodo(updateTodo, id);
  return data;
};

/**
 * Deletes a todo item.
 *
 * @param {string} id - The id of the todo item to be deleted.
 * @return {Promise<any>} - A promise that resolves with the deleted data.
 */
export const deleteTodo = async (id: string) => {
  const data = await todosModel.deleteTodo(id);
  return data;
};
