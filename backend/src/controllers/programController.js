import Program from "../models/Program.js";

// Create Program
export const createProgram = async (req, res, next) => {
  try {
    const program = await Program.create(req.body);

    res.status(201).json({
      success: true,
      message: "Program created successfully",
      program,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Programs
export const getPrograms = async (req, res, next) => {
  try {
    const programs = await Program.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: programs.length,
      programs,
    });
  } catch (error) {
    next(error);
  }
};

// Get Program By Id
export const getProgramById = async (req, res, next) => {
  try {
    const program = await Program.findById(req.params.id);

    if (!program) {
      res.status(404);
      throw new Error("Program not found");
    }

    res.status(200).json({
      success: true,
      program,
    });
  } catch (error) {
    next(error);
  }
};

// Update Program
export const updateProgram = async (req, res, next) => {
  try {
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!program) {
      res.status(404);
      throw new Error("Program not found");
    }

    res.status(200).json({
      success: true,
      message: "Program updated successfully",
      program,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Program
export const deleteProgram = async (req, res, next) => {
  try {
    const program = await Program.findById(req.params.id);

    if (!program) {
      res.status(404);
      throw new Error("Program not found");
    }

    await program.deleteOne();

    res.status(200).json({
      success: true,
      message: "Program deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};