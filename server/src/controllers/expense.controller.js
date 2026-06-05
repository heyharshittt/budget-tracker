import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

import {
  createExpense,
  getAllExpenses,
  updateExpense,
  deleteExpense,
} from "../services/expense.service.js";

export const addExpense =
  asyncHandler(
    async (req, res) => {
      const expense =
        await createExpense({
          ...req.body,
          user: req.user.id,
        });

      return res.status(201).json(
        new ApiResponse(
          201,
          "Expense added successfully",
          expense
        )
      );
    }
  );

export const getExpenses =
  asyncHandler(
    async (req, res) => {
      const expenses =
        await getAllExpenses(
          req.user.id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Expenses fetched successfully",
          expenses
        )
      );
    }
  );

export const editExpense =
  asyncHandler(
    async (req, res) => {
      const expense =
        await updateExpense(
          req.params.id,
          req.user.id,
          req.body
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Expense updated successfully",
          expense
        )
      );
    }
  );

export const removeExpense =
  asyncHandler(
    async (req, res) => {
      await deleteExpense(
        req.params.id,
        req.user.id
      );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Expense deleted successfully"
        )
      );
    }
  );