import express from "express";

import {
  createProgram,
  getPrograms,
  getProgramById,
  updateProgram,
  deleteProgram,
} from "../controllers/programController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getPrograms);
router.get("/:id", getProgramById);

// Protected Routes
router.post("/", protect, createProgram);
router.put("/:id", protect, updateProgram);
router.delete("/:id", protect, deleteProgram);

export default router;