import Budget from "../models/budget.model.js";
import ApiError from "../utils/apiError.js";

export const createBudget = async (
  budgetData
) => {
  return await Budget.create(
    budgetData
  );
};

export const getBudgets = async (
  userId
) => {
  return await Budget.find({
    user: userId,
  }).sort({
    month: -1,
  });
};

export const updateBudget = async (
  budgetId,
  userId,
  updateData
) => {
  const budget =
    await Budget.findOne({
      _id: budgetId,
      user: userId,
    });

  if (!budget) {
    throw new ApiError(
      404,
      "Budget not found"
    );
  }

  Object.assign(
    budget,
    updateData
  );

  await budget.save();

  return budget;
};

export const deleteBudget = async (
  budgetId,
  userId
) => {
  const budget =
    await Budget.findOne({
      _id: budgetId,
      user: userId,
    });

  if (!budget) {
    throw new ApiError(
      404,
      "Budget not found"
    );
  }

  await budget.deleteOne();
};