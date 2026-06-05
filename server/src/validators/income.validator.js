import ApiError from "../utils/apiError.js";

export const validateIncome = (
  req,
  res,
  next
) => {
  const {
    amount,
    source,
    date,
  } = req.body;

  if (
    amount === undefined ||
    !source ||
    !date
  ) {
    return next(
      new ApiError(
        400,
        "Amount, source and date are required"
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