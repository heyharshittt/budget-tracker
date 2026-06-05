import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "Month is required"],
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Food",
        "Rent",
        "Travel",
        "Entertainment",
        "Shopping",
        "Healthcare",
        "Education",
        "Utilities",
        "Other",
      ],
    },

    amount: {
      type: Number,
      required: [true, "Budget amount is required"],
      min: 0,
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

const Budget = mongoose.model(
  "Budget",
  budgetSchema
);

export default Budget;