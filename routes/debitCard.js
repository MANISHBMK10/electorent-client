import express from "express";
import {
  deleteDebitCard,
  getAllDebitCards,
  getUserDebitCards,
  placeDebitCard,
  updateDebitCard,
} from "../controllers/debitCardController.js";
import verifyToken from "../middleware/verifytoken.js";

export const debitCardRouter = express.Router();

debitCardRouter.route("/user/:userId").get(getUserDebitCards);
debitCardRouter
  .route("/")
  .post(verifyToken, placeDebitCard)
  .get(getAllDebitCards);

debitCardRouter
  .route("/:id")
  .patch(verifyToken, updateDebitCard)
  .delete(verifyToken, deleteDebitCard);
