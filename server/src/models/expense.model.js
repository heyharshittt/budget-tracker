import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: 0,
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

    description: {
      type: String,
      default: "",
      trim: true,
    },

    date: {
      type: Date,
      required: [true, "Date is required"],
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

const Expense = mongoose.model(
  "Expense",
  expenseSchema
);

export default Expense;