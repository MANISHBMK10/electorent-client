import express from "express";
import {
  deleteOrder,
  getAllOrders,
  getUserOrders,
  placeMultipleOrders,
  placeOrder,
  updateOrder,
} from "../controllers/orders.js";
import verifyToken from "../middleware/verifytoken.js";
export const orderRouter = express.Router();

// test route for api
orderRouter.route("/").post(placeMultipleOrders).get(getAllOrders);

// get user related orders
orderRouter.route("/:userId").get(getUserOrders);

orderRouter
  .route("/:orderId")
  .patch(verifyToken, updateOrder)
  .delete(verifyToken, deleteOrder);
