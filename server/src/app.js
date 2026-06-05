import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import healthRoutes from "./routes/healthRoutes.js";
import authRoutes from "./routes/auth.routes.js";

import errorMiddleware from "./middlewares/errorMiddleware.js";
import notFoundMiddleware from "./middlewares/notFoundMiddleware.js";

import incomeRoutes from "./routes/income.routes.js";
import expenseRoutes from "./routes/expense.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import budgetRoutes from "./routes/budget.routes.js";
import budgetAnalyticsRoutes from "./routes/budgetAnalytics.routes.js";
import goalRoutes from "./routes/goal.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import recurringTransactionRoutes from "./routes/recurringTransaction.routes.js";

dotenv.config();

const app = express();

/*
|--------------------------------------------------------------------------
| Core Middleware
|--------------------------------------------------------------------------
*/

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(morgan("dev"));

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

app.use("/api/v1/health", healthRoutes);

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/income", incomeRoutes);

app.use("/api/v1/expense", expenseRoutes);

app.use("/api/v1/dashboard", dashboardRoutes);

app.use("/api/v1/budget", budgetRoutes);

app.use(
  "/api/v1/budget-analytics",
  budgetAnalyticsRoutes
);

app.use("/api/v1/goals", goalRoutes);

app.use(
  "/api/v1/auth",
  profileRoutes
);
app.use(
  "/api/v1/recurring-transactions",
  recurringTransactionRoutes
);
/*
|--------------------------------------------------------------------------
| Error Handling
|--------------------------------------------------------------------------
*/

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;