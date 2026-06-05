import mongoose from "mongoose";

const recurringTransactionSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      amount: {
        type: Number,
        required: true,
        min: 1,
      },

      type: {
        type: String,
        enum: [
          "Income",
          "Expense",
        ],
        required: true,
      },

      category: {
        type: String,
        default: "Other",
      },

      frequency: {
        type: String,
        enum: [
          "Daily",
          "Weekly",
          "Monthly",
          "Yearly",
        ],
        required: true,
      },

      nextRunDate: {
        type: Date,
        required: true,
      },

      isActive: {
        type: Boolean,
        default: true,
      },

      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

const RecurringTransaction =
  mongoose.model(
    "RecurringTransaction",
    recurringTransactionSchema
  );

export default RecurringTransaction;