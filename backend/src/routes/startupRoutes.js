import express from "express";

import {
  createStartup,
  getStartups,
  getStartupById,
  updateStartup,
  deleteStartup,
} from "../controllers/startupController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getStartups);
router.get("/:id", getStartupById);

// Protected Routes
router.post("/", protect, createStartup);
router.put("/:id", protect, updateStartup);
router.delete("/:id", protect, deleteStartup);

export default router;