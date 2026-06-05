import express from "express";

import protect from "../middlewares/authMiddleware.js";

import {
  addIncome,
  getIncomes,
  editIncome,
  removeIncome,
} from "../controllers/income.controller.js";

import {
  validateIncome,
} from "../validators/income.validator.js";

const router = express.Router();

router.use(protect);

router
  .route("/")
  .post(
    validateIncome,
    addIncome
  )
  .get(getIncomes);

router
  .route("/:id")
  .put(
    validateIncome,
    editIncome
  )
  .delete(removeIncome);

export default router;