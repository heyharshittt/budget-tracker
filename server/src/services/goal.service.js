import Goal from "../models/goal.model.js";
import ApiError from "../utils/apiError.js";

export const createGoal = async (
  goalData
) => {
  return await Goal.create(goalData);
};

export const getGoals = async (
  userId
) => {
  return await Goal.find({
    user: userId,
  }).sort({
    createdAt: -1,
  });
};

export const updateGoal = async (
  goalId,
  userId,
  updateData
) => {
  const goal =
    await Goal.findOne({
      _id: goalId,
      user: userId,
    });

  if (!goal) {
    throw new ApiError(
      404,
      "Goal not found"
    );
  }

  Object.assign(goal, updateData);

  await goal.save();

  return goal;
};

export const deleteGoal = async (
  goalId,
  userId
) => {
  const goal =
    await Goal.findOne({
      _id: goalId,
      user: userId,
    });

  if (!goal) {
    throw new ApiError(
      404,
      "Goal not found"
    );
  }

  await goal.deleteOne();
};