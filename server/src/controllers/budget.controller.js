import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

import {
  createBudget,
  getBudgets,
  updateBudget,
  deleteBudget,
} from "../services/budget.service.js";

export const addBudget =
  asyncHandler(
    async (req, res) => {
      const budget =
        await createBudget({
          ...req.body,
          user: req.user.id,
        });

      return res.status(201).json(
        new ApiResponse(
          201,
          "Budget created successfully",
          budget
        )
      );
    }
  );

export const getAllBudgets =
  asyncHandler(
    async (req, res) => {
      const budgets =
        await getBudgets(
          req.user.id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Budgets fetched successfully",
          budgets
        )
      );
    }
  );

export const editBudget =
  asyncHandler(
    async (req, res) => {
      const budget =
        await updateBudget(
          req.params.id,
          req.user.id,
          req.body
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Budget updated successfully",
          budget
        )
      );
    }
  );

export const removeBudget =
  asyncHandler(
    async (req, res) => {
      await deleteBudget(
        req.params.id,
        req.user.id
      );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Budget deleted successfully"
        )
      );
    }
  );