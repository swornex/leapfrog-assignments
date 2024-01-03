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
import { accessAuth } from "../middlewares/auth";

const router = Router();

router.post("/", accessAuth, validateReqBody(addTodoSchema), addTodo);
router.get("/", accessAuth, validateReqQuery(getTodoQuerySchema), getAllTodos);
router.patch("/:id", accessAuth, validateReqBody(updateTodoSchema), updateTodo);
router.delete("/:id", accessAuth, deleteTodo);

export default router;
