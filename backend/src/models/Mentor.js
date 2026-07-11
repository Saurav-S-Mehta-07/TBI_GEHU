import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    designation: {
      type: String,
      required: true,
      trim: true,
    },

    organization: {
      type: String,
      required: true,
      trim: true,
    },

    expertise: {
      type: [String],
      default: [],
    },

    bio: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Mentor = mongoose.model("Mentor", mentorSchema);

export default Mentor;