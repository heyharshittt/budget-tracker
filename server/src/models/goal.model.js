import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Goal title is required"],
      trim: true,
    },

    targetAmount: {
      type: Number,
      required: [true, "Target amount is required"],
      min: 1,
    },

    currentAmount: {
      type: Number,
      default: 0,
      min: 0,
    },

    targetDate: {
      type: Date,
      required: [true, "Target date is required"],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model(
  "Goal",
  goalSchema
);

export default Goal;