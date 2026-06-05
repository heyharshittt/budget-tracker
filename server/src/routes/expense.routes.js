import express from "express";

import protect from "../middlewares/authMiddleware.js";

import {
  addExpense,
  getExpenses,
  editExpense,
  removeExpense,
} from "../controllers/expense.controller.js";

import {
  validateExpense,
} from "../validators/expense.validator.js";

const router = express.Router();

router.use(protect);

router
  .route("/")
  .post(
    validateExpense,
    addExpense
  )
  .get(getExpenses);

router
  .route("/:id")
  .put(
    validateExpense,
    editExpense
  )
  .delete(removeExpense);

export default router;