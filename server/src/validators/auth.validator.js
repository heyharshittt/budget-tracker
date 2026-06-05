import ApiError from "../utils/apiError.js";

export const validateRegister = (
  req,
  res,
  next
) => {
  const { name, email, password } =
    req.body;

  if (!name || !email || !password) {
    return next(
      new ApiError(
        400,
        "All fields are required"
      )
    );
  }

  if (password.length < 8) {
    return next(
      new ApiError(
        400,
        "Password must be at least 8 characters"
      )
    );
  }

  next();
};

export const validateLogin = (
  req,
  res,
  next
) => {
  const { email, password } =
    req.body;

  if (!email || !password) {
    return next(
      new ApiError(
        400,
        "Email and password are required"
      )
    );
  }

  next();
};