import asyncHandler from "../utils/asyncHandler.js";

import ApiResponse from "../utils/apiResponse.js";

import {
  getBudgetAnalytics,
} from "../services/budgetAnalytics.service.js";

export const getBudgetInsights =
  asyncHandler(
    async (req, res) => {
      const analytics =
        await getBudgetAnalytics(
          req.user.id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Budget analytics fetched successfully",
          analytics
        )
      );
    }
  );