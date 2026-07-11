import Admin from "../models/Admin.js";
import generateToken from "../utils/generateToken.js";

/**
 * @route   POST /api/auth/login
 * @access  Public
 */
export const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error("Email and password are required");
    }

    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin) {
      res.status(401);
      throw new Error("Invalid credentials");
    }

    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      res.status(401);
      throw new Error("Invalid credentials");
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      token: generateToken(admin._id),
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/auth/profile
 * @access  Private
 */
export const getAdminProfile = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.admin._id);

    if (!admin) {
      res.status(404);
      throw new Error("Admin not found");
    }

    res.status(200).json({
      success: true,
      admin,
    });
  } catch (error) {
    next(error);
  }
};