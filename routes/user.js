import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { multerUploads } from "../middleware/multer.js";
import verifyToken from "../middleware/verifytoken.js";
export const userRouter = express.Router();

// test route for api
userRouter.route("/").get(getAllUsers).post(verifyToken, createUser);
userRouter
  .route("/:uid")
  .get(getUser)
  .patch(verifyToken, multerUploads, updateUser)
  .delete(verifyToken, deleteUser);
