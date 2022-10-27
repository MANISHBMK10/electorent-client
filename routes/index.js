import express from "express";
import { userRouter } from "./user.js";
export const indexRouter = express.Router();
import { productRouter } from "../routes/productRoutes.js";
import { reviewRouter } from "./reviewRoutes.js";
import { faqRouter } from "./faqRoutes.js";
import { orderRouter } from "./orders.js";
import { addressRouter } from "./addressRoutes.js";
import { debitCardRouter } from "./debitCard.js";
import { upiRouter } from "./upi.js";
import { loginRoute } from "./loginRoute.js";
import { paymentRouter } from "./payment.js";
// test route for api
indexRouter.get("/", function (req, res) {
  res.status(200).json({ message: "ok" });
});

indexRouter.use("/product", productRouter);
indexRouter.use("/review", reviewRouter);
indexRouter.use("/faq", faqRouter);
indexRouter.use("/debitcard", debitCardRouter);
indexRouter.use("/upi", upiRouter);
indexRouter.use("/user", userRouter);
indexRouter.use("/orders", orderRouter);
indexRouter.use("/address", addressRouter);
indexRouter.use("/login", loginRoute);
indexRouter.use("/create-checkout-session", paymentRouter);
