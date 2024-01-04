import joi from "joi";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../constants/pagination";

const addUserSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});

const getUsersSchema = joi.object({
  page: joi.number().integer().min(1).default(DEFAULT_PAGE),
  size: joi.number().integer().min(1).max(30).default(DEFAULT_PAGE_SIZE)
});

export { addUserSchema, getUsersSchema };
