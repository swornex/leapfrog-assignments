import fs from "fs/promises";
import crypto from "crypto";

import { IGetTodoQuery, ITask, IUpdateTodo } from "../interfaces/todo";
import NotFoundError from "../errors/notFoundError";

const todoFilePath = "src/json/todo.json";

/**
 * Adds a new todo item to the list of tasks.
 *
 * @param {string} title - The title of the todo item.
 * @return {Promise<object[]>} The updated list of tasks.
 */
export const addTodo = async (title: string) => {
  const tasks = JSON.parse(await fs.readFile(todoFilePath, "utf-8"));
  tasks.push({
    id: crypto.randomBytes(5).toString("hex"),
    title,
    isCompleted: false
  });
  await fs.writeFile(todoFilePath, JSON.stringify(tasks, null, 2));
  return tasks;
};

/**
 * Retrieves all todos based on the provided filter.
 *
 * @param {IGetTodoQuery} filter - The filter query to apply to the todos.
 * @return {Promise<any>} - A promise that resolves with the filtered todos.
 */
export const getAllTodos = async (filter: IGetTodoQuery = {}) => {
  let data = JSON.parse(await fs.readFile(todoFilePath, "utf8"));

  if (filter.search) {
    data = getSearchedTodos(filter.search, data);
  }

  if (filter.status) {
    data =
      filter.status === "completed"
        ? getCompletedTodos(data)
        : getRemainingTodos(data);
  }

  return data;
};

/**
 * Returns an array of completed todos.
 *
 * @param {ITask[]} tasks - The array of tasks to filter.
 * @return {ITask[]} - An array of completed tasks.
 */
export const getCompletedTodos = (tasks: ITask[]) => {
  const completedTasks = tasks.filter((task: ITask) => {
    return task.isCompleted;
  });
  return completedTasks;
};

/**
 * Returns an array of tasks that are not completed.
 *
 * @param {ITask[]} tasks - The array of tasks to filter.
 * @return {ITask[]} An array of tasks that are not completed.
 */
export const getRemainingTodos = (tasks: ITask[]) => {
  const remainingTask = tasks.filter((task: ITask) => {
    return !task.isCompleted;
  });
  return remainingTask;
};

/**
 * Filters an array of tasks based on a search parameter.
 *
 * @param {string} searchParams - The search parameter to filter tasks by.
 * @param {ITask[]} tasks - The array of tasks to filter.
 * @return {ITask[]} - The filtered array of tasks.
 */
export const getSearchedTodos = (searchParams: string, tasks: ITask[]) => {
  const searchedTasks: ITask[] = tasks.filter((task: ITask) => {
    return task.title.toLowerCase().includes(searchParams.toLowerCase());
  });

  return searchedTasks;
};

/**
 * Updates a todo with the specified ID.
 *
 * @param {IUpdateTodo} updateTodo - The updated todo object.
 * @param {string} id - The ID of the todo to update.
 * @returns {ITask} - The updated todo.
 */
export const updateTodo = async (updateTodo: IUpdateTodo, id: string) => {
  const tasks = JSON.parse(await fs.readFile(todoFilePath, "utf-8"));

  const updatedTasks = tasks.map((task: ITask) => {
    if (task.id === id) {
      return { ...task, ...updateTodo };
    }
    return task;
  });

  const updatedTask = updatedTasks.find((task: ITask) => task.id === id);

  if (!updatedTask) {
    throw new NotFoundError("Id not found");
  }

  await fs.writeFile(todoFilePath, JSON.stringify(updatedTasks, null, 2));
  return updatedTask;
};

/**
 * Deletes a todo item with the given id.
 *
 * @param {string} id - The id of the todo item to delete.
 * @return {ITask} The deleted todo item.
 */
export const deleteTodo = async (id: string) => {
  const tasks = JSON.parse(await fs.readFile(todoFilePath, "utf-8"));
  const deletedTask = tasks.find((task: ITask) => task.id === id);

  if (!deletedTask) {
    throw new NotFoundError("Id not found");
  }

  const newTasks = tasks.filter((task: ITask) => task !== deletedTask);
  await fs.writeFile(todoFilePath, JSON.stringify(newTasks, null, 2));
  return deletedTask;
};
