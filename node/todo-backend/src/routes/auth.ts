import { Router } from "express";
import { login, refreshToken, signup } from "../controllers/auth";
import { refreshAuth } from "../middlewares/auth";

const router = Router();

router.post("/refresh", refreshAuth, refreshToken);
router.post("/signup", signup);
router.post("/login", login);

export default router;
