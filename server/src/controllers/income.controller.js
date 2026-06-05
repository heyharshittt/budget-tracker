import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

import {
  createIncome,
  getAllIncomes,
  updateIncome,
  deleteIncome,
} from "../services/income.service.js";

export const addIncome =
  asyncHandler(
    async (req, res) => {
      const income =
        await createIncome({
          ...req.body,
          user: req.user.id,
        });

      return res.status(201).json(
        new ApiResponse(
          201,
          "Income added successfully",
          income
        )
      );
    }
  );

export const getIncomes =
  asyncHandler(
    async (req, res) => {
      const incomes =
        await getAllIncomes(
          req.user.id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Income fetched successfully",
          incomes
        )
      );
    }
  );

export const editIncome =
  asyncHandler(
    async (req, res) => {
      const income =
        await updateIncome(
          req.params.id,
          req.user.id,
          req.body
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Income updated successfully",
          income
        )
      );
    }
  );

export const removeIncome =
  asyncHandler(
    async (req, res) => {
      await deleteIncome(
        req.params.id,
        req.user.id
      );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Income deleted successfully"
        )
      );
    }
  );