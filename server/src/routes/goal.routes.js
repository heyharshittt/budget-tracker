import express from "express";

import protect from "../middlewares/authMiddleware.js";

import {
  addGoal,
  getAllGoals,
  editGoal,
  removeGoal,
} from "../controllers/goal.controller.js";

import {
  validateGoal,
} from "../validators/goal.validator.js";

const router = express.Router();

router.use(protect);

router
  .route("/")
  .post(
    validateGoal,
    addGoal
  )
  .get(getAllGoals);

router
  .route("/:id")
  .put(
    validateGoal,
    editGoal
  )
  .delete(removeGoal);

export default router;