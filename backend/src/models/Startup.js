import mongoose from "mongoose";

const startupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    founder: {
      type: String,
      default: "",
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

    image: {
      type: String,
      default: "",
      trim: true,
    },

    website: {
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
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Startup = mongoose.model("Startup", startupSchema);

export default Startup;