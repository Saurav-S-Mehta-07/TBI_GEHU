import Startup from "../models/Startup.js";

// Create Startup
export const createStartup = async (req, res, next) => {
  try {
    const startup = await Startup.create(req.body);

    res.status(201).json({
      success: true,
      message: "Startup created successfully",
      startup,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Startups
export const getStartups = async (req, res, next) => {
  try {
    const startups = await Startup.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: startups.length,
      startups,
    });
  } catch (error) {
    next(error);
  }
};

// Get Startup By Id
export const getStartupById = async (req, res, next) => {
  try {
    const startup = await Startup.findById(req.params.id);

    if (!startup) {
      res.status(404);
      throw new Error("Startup not found");
    }

    res.status(200).json({
      success: true,
      startup,
    });
  } catch (error) {
    next(error);
  }
};

// Update Startup
export const updateStartup = async (req, res, next) => {
  try {
    const startup = await Startup.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!startup) {
      res.status(404);
      throw new Error("Startup not found");
    }

    res.status(200).json({
      success: true,
      message: "Startup updated successfully",
      startup,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Startup
export const deleteStartup = async (req, res, next) => {
  try {
    const startup = await Startup.findById(req.params.id);

    if (!startup) {
      res.status(404);
      throw new Error("Startup not found");
    }

    await startup.deleteOne();

    res.status(200).json({
      success: true,
      message: "Startup deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};