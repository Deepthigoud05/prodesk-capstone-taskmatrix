import express from "express";

import {
  getTools,
  addTool,
  updateTool,
  deleteTool,
} from "../controllers/toolController.js";

import validateTool from "../middleware/validateTool.js";

const router = express.Router();

// Get all tools
router.get("/", getTools);

// Add a new tool (Validated)
router.post("/", validateTool, addTool);

// Update a tool (Validated)
router.put("/:id", validateTool, updateTool);

// Delete a tool
router.delete("/:id", deleteTool);

export default router;