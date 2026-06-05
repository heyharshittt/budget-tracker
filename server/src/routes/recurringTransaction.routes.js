import express from "express";

import protect from "../middlewares/authMiddleware.js";

import {
  addRecurringTransaction,
  getAllRecurringTransactions,
  removeRecurringTransaction,
} from "../controllers/recurringTransaction.controller.js";

const router = express.Router();

router.use(protect);

router
  .route("/")
  .post(
    addRecurringTransaction
  )
  .get(
    getAllRecurringTransactions
  );

router
  .route("/:id")
  .delete(
    removeRecurringTransaction
  );

export default router;