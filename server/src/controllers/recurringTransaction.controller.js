import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

import {
  createRecurringTransaction,
  getRecurringTransactions,
  deleteRecurringTransaction,
} from "../services/recurringTransaction.service.js";

export const addRecurringTransaction =
  asyncHandler(
    async (req, res) => {
      const transaction =
        await createRecurringTransaction(
          {
            ...req.body,
            user:
              req.user.id,
          }
        );

      return res
        .status(201)
        .json(
          new ApiResponse(
            201,
            "Recurring transaction created successfully",
            transaction
          )
        );
    }
  );

export const getAllRecurringTransactions =
  asyncHandler(
    async (req, res) => {
      const transactions =
        await getRecurringTransactions(
          req.user.id
        );

      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            "Recurring transactions fetched successfully",
            transactions
          )
        );
    }
  );

export const removeRecurringTransaction =
  asyncHandler(
    async (req, res) => {
      await deleteRecurringTransaction(
        req.params.id,
        req.user.id
      );

      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            "Recurring transaction deleted successfully"
          )
        );
    }
  );