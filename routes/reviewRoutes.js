import { Router } from "express";

import {
  getReviews,
  createReviews,
  deleteReview,
  updateReview,
} from "../controllers/reviewController.js";
import verifyToken from "../middleware/verifytoken.js";

export const reviewRouter = Router();

reviewRouter.get("/:productId", getReviews);
reviewRouter.post("/", verifyToken, createReviews);
reviewRouter
  .route("/:id")
  .delete(verifyToken, deleteReview)
  .patch(verifyToken, updateReview);
