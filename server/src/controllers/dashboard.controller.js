import asyncHandler from "../utils/asyncHandler.js";

import ApiResponse from "../utils/apiResponse.js";

import {
  getDashboardData,
} from "../services/dashboard.service.js";

export const getDashboard =
  asyncHandler(
    async (req, res) => {
      const data =
        await getDashboardData(
          req.user.id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Dashboard data fetched successfully",
          data
        )
      );
    }
  );