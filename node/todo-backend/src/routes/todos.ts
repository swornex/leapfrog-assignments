import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo
} from "../controllers/todos";

const router = Router();

router.post("/", addTodo);
router.get("/", getTodos);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
