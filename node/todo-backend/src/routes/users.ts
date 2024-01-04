import { Router } from "express";
import { getAllUsers } from "../controllers/user";
import { accessAuth } from "../middlewares/auth";
import { validateReqBody } from "../middlewares/validator";
import { getUsersSchema } from "../schema/users";

const router = Router();

router.get("/", accessAuth, validateReqBody(getUsersSchema), getAllUsers);

export default router;
