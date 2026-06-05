import { HTTP_STATUS } from "../constants/httpStatus.js";

const errorMiddleware = (
  err,
  req,
  res,
  next
) => {
  const statusCode =
    err.statusCode ||
    HTTP_STATUS.INTERNAL_SERVER_ERROR;

  const response = {
    success: false,
    message:
      err.message ||
      "Internal Server Error",
  };

  if (
    process.env.NODE_ENV === "development" &&
    process.env.SHOW_STACK === "true"
  ) {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
};

export default errorMiddleware;