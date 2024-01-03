import { Router } from "express";
import { login, refreshToken, signup } from "../controllers/auth";
import { refreshAuth } from "../middlewares/auth";
import { validateReqBody } from "../middlewares/validator";
import { addUserSchema } from "../schema/users";

const router = Router();

router.post("/refresh", refreshAuth, refreshToken);
router.post("/signup", validateReqBody(addUserSchema), signup);
router.post("/login", validateReqBody(addUserSchema), login);

export default router;
