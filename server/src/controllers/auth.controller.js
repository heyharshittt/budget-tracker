import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../services/auth.service.js";

import sendToken from "../utils/sendToken.js";

export const register = asyncHandler(
  async (req, res) => {
    const {
      name,
      email,
      password,
    } = req.body;

    const user = await registerUser(
      name,
      email,
      password
    );

    return res.status(201).json(
      new ApiResponse(
        201,
        "User registered successfully",
        {
          id: user._id,
          name: user.name,
          email: user.email,
        }
      )
    );
  }
);

export const login = asyncHandler(
  async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    const user = await loginUser(
      email,
      password
    );

    sendToken(
      user,
      200,
      res
    );
  }
);

export const logout = asyncHandler(
  async (req, res) => {
    const isProduction =
      process.env.NODE_ENV ===
      "production";

    res.cookie("token", "", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction
        ? "none"
        : "lax",
      expires: new Date(0),
    });

    return res.status(200).json(
      new ApiResponse(
        200,
        "Logged out successfully"
      )
    );
  }
);

export const getMe = asyncHandler(
  async (req, res) => {
    const user =
      await getCurrentUser(
        req.user.id
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Current user fetched successfully",
        user
      )
    );
  }
);