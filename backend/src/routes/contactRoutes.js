import express from "express";

import {
  createContact,
  getContacts,
  getContactById,
  deleteContact,
} from "../controllers/contactController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Route
router.post("/", createContact);

// Protected Routes
router.get("/", protect, getContacts);
router.get("/:id", protect, getContactById);
router.delete("/:id", protect, deleteContact);

export default router;