import joi from "joi";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../constants/pagination";

const addTodoSchema = joi.object({
  title: joi.string().required()
});

const updateTodoSchema = joi
  .object({
    title: joi.string().optional(),
    isCompleted: joi.boolean().optional()
  })
  .or("title", "isCompleted");

const getTodoQuerySchema = joi.object({
  search: joi.string().optional(),
  status: joi.string().valid("completed", "remaining").optional(),
  page: joi.number().integer().min(1).default(DEFAULT_PAGE),
  size: joi.number().integer().min(1).max(30).default(DEFAULT_PAGE_SIZE)
});

export { addTodoSchema, updateTodoSchema, getTodoQuerySchema };
