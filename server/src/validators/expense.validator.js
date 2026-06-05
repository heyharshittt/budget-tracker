import ApiError from "../utils/apiError.js";

export const validateExpense = (
  req,
  res,
  next
) => {
  const {
    amount,
    category,
    date,
  } = req.body;

  if (
    amount === undefined ||
    !category ||
    !date
  ) {
    return next(
      new ApiError(
        400,
        "Amount, category and date are required"
      )
    );
  }

  if (amount <= 0) {
    return next(
      new ApiError(
        400,
        "Amount must be greater than zero"
      )
    );
  }

  next();
};