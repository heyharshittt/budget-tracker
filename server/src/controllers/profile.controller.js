import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const getProfile =
  asyncHandler(async (req, res) => {
    const user =
      await User.findById(
        req.user.id
      ).select("-password");

    return res.status(200).json(
      new ApiResponse(
        200,
        "Profile fetched successfully",
        user
      )
    );
  });

export const updateProfile =
  asyncHandler(async (req, res) => {
    const { name, email } =
      req.body;

    const user =
      await User.findById(
        req.user.id
      );

    user.name =
      name || user.name;

    user.email =
      email || user.email;

    await user.save();

    return res.status(200).json(
      new ApiResponse(
        200,
        "Profile updated successfully",
        user
      )
    );
  });

export const changePassword =
  asyncHandler(async (req, res) => {
    const {
      currentPassword,
      newPassword,
    } = req.body;

    const user =
      await User.findById(
        req.user.id
      );

    const isMatch =
      await bcrypt.compare(
        currentPassword,
        user.password
      );

    if (!isMatch) {
      throw new Error(
        "Current password is incorrect"
      );
    }

    user.password =
      newPassword;

    await user.save();

    return res.status(200).json(
      new ApiResponse(
        200,
        "Password changed successfully"
      )
    );
  });