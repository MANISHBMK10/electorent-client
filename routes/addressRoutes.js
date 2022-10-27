import { Router } from "express";
import {
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/addressController.js";
import verifyToken from "../middleware/verifytoken.js";

export const addressRouter = Router();

// get route of the address api using address id
addressRouter.route("/:userId").get(getAddress);

// post route of the address api
addressRouter.route("/").post(verifyToken, createAddress);

// update and the delete routes for the address api using address id
addressRouter
  .route("/:id")
  .patch(verifyToken, updateAddress)
  .delete(verifyToken, deleteAddress);
