import express from "express";

import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

import protect from "../middleware/authMiddleware.js";
import validate from "../middleware/validate.js";
import { projectSchema } from "../validation/projectValidation.js";

const router = express.Router();

router.get("/", protect, getProjects);

router.post("/", protect, validate(projectSchema), createProject);

router.put("/:id", protect, validate(projectSchema), updateProject);

router.delete("/:id", protect, deleteProject);

export default router;