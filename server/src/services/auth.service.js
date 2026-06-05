import User from "../models/user.model.js";
import ApiError from "../utils/apiError.js";

export const registerUser = async (
  name,
  email,
  password
) => {
  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    throw new ApiError(
      409,
      "Email already registered"
    );
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  return user;
};

export const loginUser = async (
  email,
  password
) => {
  const user = await User.findOne({
    email,
  }).select("+password");

  if (!user) {
    throw new ApiError(
      401,
      "Invalid email or password"
    );
  }

  const isPasswordCorrect =
    await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new ApiError(
      401,
      "Invalid email or password"
    );
  }

  return user;
};

export const getCurrentUser = async (
  userId
) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(
      404,
      "User not found"
    );
  }

  return user;
};