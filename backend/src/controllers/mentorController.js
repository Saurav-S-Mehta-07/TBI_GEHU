import Mentor from "../models/Mentor.js";

// Create Mentor
export const createMentor = async (req, res, next) => {
  try {
    const mentor = await Mentor.create(req.body);

    res.status(201).json({
      success: true,
      message: "Mentor created successfully",
      mentor,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Mentors
export const getMentors = async (req, res, next) => {
  try {
    const mentors = await Mentor.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: mentors.length,
      mentors,
    });
  } catch (error) {
    next(error);
  }
};

// Get Mentor By Id
export const getMentorById = async (req, res, next) => {
  try {
    const mentor = await Mentor.findById(req.params.id);

    if (!mentor) {
      res.status(404);
      throw new Error("Mentor not found");
    }

    res.status(200).json({
      success: true,
      mentor,
    });
  } catch (error) {
    next(error);
  }
};

// Update Mentor
export const updateMentor = async (req, res, next) => {
  try {
    const mentor = await Mentor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!mentor) {
      res.status(404);
      throw new Error("Mentor not found");
    }

    res.status(200).json({
      success: true,
      message: "Mentor updated successfully",
      mentor,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Mentor
export const deleteMentor = async (req, res, next) => {
  try {
    const mentor = await Mentor.findById(req.params.id);

    if (!mentor) {
      res.status(404);
      throw new Error("Mentor not found");
    }

    await mentor.deleteOne();

    res.status(200).json({
      success: true,
      message: "Mentor deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};