import express from "express";

import protect from "../middlewares/authMiddleware.js";

import {
  addBudget,
  getAllBudgets,
  editBudget,
  removeBudget,
} from "../controllers/budget.controller.js";

import {
  validateBudget,
} from "../validators/budget.validator.js";

const router = express.Router();

router.use(protect);

router
  .route("/")
  .post(
    validateBudget,
    addBudget
  )
  .get(getAllBudgets);

router
  .route("/:id")
  .put(
    validateBudget,
    editBudget
  )
  .delete(removeBudget);

export default router;