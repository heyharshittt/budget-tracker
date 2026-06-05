import Income from "../models/income.model.js";
import ApiError from "../utils/apiError.js";

export const createIncome = async (
  incomeData
) => {
  return await Income.create(
    incomeData
  );
};

export const getAllIncomes =
  async (userId) => {
    return await Income.find({
      user: userId,
    }).sort({
      date: -1,
    });
  };

export const updateIncome =
  async (
    incomeId,
    userId,
    updateData
  ) => {
    const income =
      await Income.findOne({
        _id: incomeId,
        user: userId,
      });

    if (!income) {
      throw new ApiError(
        404,
        "Income not found"
      );
    }

    Object.assign(
      income,
      updateData
    );

    await income.save();

    return income;
  };

export const deleteIncome =
  async (
    incomeId,
    userId
  ) => {
    const income =
      await Income.findOne({
        _id: incomeId,
        user: userId,
      });

    if (!income) {
      throw new ApiError(
        404,
        "Income not found"
      );
    }

    await income.deleteOne();
  };