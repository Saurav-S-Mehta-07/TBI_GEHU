import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      default: "",
    },

    date: {
      type: Date,
      required: true,
    },

    venue: {
      type: String,
      default: "",
    },

    speaker: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    registrationLink: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;