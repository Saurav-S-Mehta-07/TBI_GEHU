import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import programRoutes from "./routes/programRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import startupRoutes from "./routes/startupRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

import {
  notFound,
  errorHandler,
} from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "TBI GEHU API Running",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/mentors", mentorRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/startups", startupRoutes);
app.use("/api/contact", contactRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

export default app;