import mongoose from "mongoose";

const startupSchema = new mongoose.Schema(
  {
    startupName: {
      type: String,
      required: true,
      trim: true,
    },

    founder: {
      type: String,
      required: true,
      trim: true,
    },

    sector: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    website: {
      type: String,
      default: "",
    },

    logo: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Active", "Graduated", "Inactive"],
      default: "Active",
    },

    fundingRaised: {
      type: Number,
      default: 0,
    },

    foundedYear: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Startup = mongoose.model("Startup", startupSchema);

export default Startup;