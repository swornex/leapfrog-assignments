import { Router } from "express";
import { getAllUsers } from "../controllers/user";
import { accessAuth } from "../middlewares/auth";

const router = Router();

router.get("/", accessAuth, getAllUsers);

export default router;
