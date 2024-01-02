import { NextFunction, Request, Response, Router } from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  updateTodo
} from "../controllers/todos";
import { validateReqBody, validateReqQuery } from "../middlewares/validator";
import {
  addTodoSchema,
  getTodoQuerySchema,
  updateTodoSchema
} from "../schema/todos";

const router = Router();

router.post("/", validateReqBody(addTodoSchema), addTodo);
router.get("/", validateReqQuery(getTodoQuerySchema), getAllTodos);
router.patch("/:id", validateReqBody(updateTodoSchema), updateTodo);
router.delete("/:id", deleteTodo);

export default router;
