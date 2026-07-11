import express from "express";

import {
  createMentor,
  getMentors,
  getMentorById,
  updateMentor,
  deleteMentor,
} from "../controllers/mentorController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getMentors);
router.get("/:id", getMentorById);

// Protected Routes
router.post("/", protect, createMentor);
router.put("/:id", protect, updateMentor);
router.delete("/:id", protect, deleteMentor);

export default router;