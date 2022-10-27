import express from "express";

import {
  deleteUpi,
  getAllUpis,
  getUserUpis,
  placeUpi,
  updateUpi,
} from "../controllers/upiController.js";
import verifyToken from "../middleware/verifytoken.js";

export const upiRouter = express.Router();

upiRouter.route("/").get(getAllUpis);
upiRouter.route("/").post(verifyToken, placeUpi);

upiRouter.route("/user/:userId").get(getUserUpis);

upiRouter
  .route("/:upiId")
  .patch(verifyToken, updateUpi)
  .delete(verifyToken, deleteUpi);
