import ApiError from "../utils/apiError.js";

export const validateBudget = (
  req,
  res,
  next
) => {
  const {
    month,
    category,
    amount,
  } = req.body;

  if (
    !month ||
    !category ||
    amount === undefined
  ) {
    return next(
      new ApiError(
        400,
        "Month, category and amount are required"
      )
    );
  }

  if (amount <= 0) {
    return next(
      new ApiError(
        400,
        "Budget amount must be greater than zero"
      )
    );
  }

  next();
};