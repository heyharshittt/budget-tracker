import Expense from "../models/expense.model.js";
import ApiError from "../utils/apiError.js";

export const createExpense = async (
  expenseData
) => {
  return await Expense.create(
    expenseData
  );
};

export const getAllExpenses =
  async (userId) => {
    return await Expense.find({
      user: userId,
    }).sort({
      date: -1,
    });
  };

export const updateExpense =
  async (
    expenseId,
    userId,
    updateData
  ) => {
    const expense =
      await Expense.findOne({
        _id: expenseId,
        user: userId,
      });

    if (!expense) {
      throw new ApiError(
        404,
        "Expense not found"
      );
    }

    Object.assign(
      expense,
      updateData
    );

    await expense.save();

    return expense;
  };

export const deleteExpense =
  async (
    expenseId,
    userId
  ) => {
    const expense =
      await Expense.findOne({
        _id: expenseId,
        user: userId,
      });

    if (!expense) {
      throw new ApiError(
        404,
        "Expense not found"
      );
    }

    await expense.deleteOne();
  };