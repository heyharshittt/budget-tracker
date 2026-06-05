import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

import {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
} from "../services/goal.service.js";

export const addGoal =
  asyncHandler(async (req, res) => {
    const goal =
      await createGoal({
        ...req.body,
        user: req.user.id,
      });

    return res.status(201).json(
      new ApiResponse(
        201,
        "Goal created successfully",
        goal
      )
    );
  });

export const getAllGoals =
  asyncHandler(async (req, res) => {
    const goals =
      await getGoals(req.user.id);

    return res.status(200).json(
      new ApiResponse(
        200,
        "Goals fetched successfully",
        goals
      )
    );
  });

export const editGoal =
  asyncHandler(async (req, res) => {
    const goal =
      await updateGoal(
        req.params.id,
        req.user.id,
        req.body
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Goal updated successfully",
        goal
      )
    );
  });

export const removeGoal =
  asyncHandler(async (req, res) => {
    await deleteGoal(
      req.params.id,
      req.user.id
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Goal deleted successfully"
      )
    );
  });