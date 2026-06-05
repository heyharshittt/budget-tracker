import express from "express";

import protect from "../middlewares/authMiddleware.js";

import {
  getProfile,
  updateProfile,
  changePassword,
} from "../controllers/profile.controller.js";

const router = express.Router();

router.use(protect);

router.get(
  "/me",
  getProfile
);

router.put(
  "/profile",
  updateProfile
);

router.put(
  "/change-password",
  changePassword
);

export default router;