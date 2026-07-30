
import express from "express";
import { suggestTask } from "../controllers/aiController.js";
import { aiLimiter } from "../middleware/rateLimiter.js";
const router = express.Router();

router.post(
  "/suggest",
  aiLimiter,
  suggestTask
);

export default router;