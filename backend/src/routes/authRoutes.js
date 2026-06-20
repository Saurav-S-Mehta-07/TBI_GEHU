import express from "express";

import {
  loginAdmin,
  getAdminProfile,
} from "../controllers/authController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Route
router.post("/login", loginAdmin);

// Private Route
router.get("/profile", protect, getAdminProfile);

export default router;