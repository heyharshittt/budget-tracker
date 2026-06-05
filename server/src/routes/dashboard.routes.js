import express from "express";

import protect from "../middlewares/authMiddleware.js";

import {
  getDashboard,
} from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get(
  "/",
  protect,
  getDashboard
);

export default router;