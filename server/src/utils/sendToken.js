import generateToken from "./generateToken.js";

const sendToken = (
  user,
  statusCode,
  res
) => {
  const token = generateToken(
    user._id
  );

  const isProduction =
    process.env.NODE_ENV === "production";

  res.cookie("token", token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction
      ? "none"
      : "lax",
    maxAge:
      7 * 24 * 60 * 60 * 1000,
  });

  res.status(statusCode).json({
    success: true,
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

export default sendToken;