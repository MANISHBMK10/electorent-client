import { Router } from "express";

import {
  getFaqs,
  createFaqs,
  deleteFaq,
  updateFaq,
} from "../controllers/faqController.js";

export const faqRouter = Router();

faqRouter.post("/", createFaqs);
faqRouter.get("/:productId", getFaqs);
faqRouter.route("/:id").delete(deleteFaq).patch(updateFaq);
