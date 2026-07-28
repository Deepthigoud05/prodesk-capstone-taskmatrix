import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { loginLimiter } from "../middleware/rateLimiter.js";
import validate from "../middleware/validate.js";
import {
  registerSchema,
  loginSchema,
} from "../validation/authValidation.js";

const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);

router.post(
  "/login",
  loginLimiter,
  validate(loginSchema),
  loginUser
);

export default router;