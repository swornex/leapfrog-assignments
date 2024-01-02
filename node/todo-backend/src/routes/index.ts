import { Router } from "express";
import todos from "./todos";
import auth from "./auth";
import users from "./users";

const router = Router();

router.use("/todos", todos);
router.use("/auth", auth);
router.use("/users", users);

export default router;
