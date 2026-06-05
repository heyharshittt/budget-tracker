import express from "express";

import protect from "../middlewares/authMiddleware.js";

import {
  getBudgetInsights,
} from "../controllers/budgetAnalytics.controller.js";

const router = express.Router();

router.get(
  "/",
  protect,
  getBudgetInsights
);

export default router;