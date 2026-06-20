import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../src/config/db.js";
import Admin from "../src/models/Admin.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({
      email: "admin@tbigehu.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const admin = await Admin.create({
      username: "admin",
      email: "admin@tbigehu.com",
      password: "admin123",
    });

    console.log("Admin Created Successfully");
    console.log({
      id: admin._id,
      username: admin.username,
      email: admin.email,
    });

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();