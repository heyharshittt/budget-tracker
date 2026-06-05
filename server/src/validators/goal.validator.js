import ApiError from "../utils/apiError.js";

export const validateGoal = (
  req,
  res,
  next
) => {
  const {
    title,
    targetAmount,
    targetDate,
  } = req.body;

  if (
    !title ||
    targetAmount === undefined ||
    !targetDate
  ) {
    return next(
      new ApiError(
        400,
        "Title, target amount and target date are required"
      )
    );
  }

  if (targetAmount <= 0) {
    return next(
      new ApiError(
        400,
        "Target amount must be greater than zero"
      )
    );
  }

  next();
};