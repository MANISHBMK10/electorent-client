import { Router } from "express";
import {
  getProducts,
  createProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getCategoryProducts,
} from "../controllers/productController.js";

export const productRouter = Router();

productRouter.route("/").get(getProducts).post(createProducts);
productRouter.get("/category/:categoryName", getCategoryProducts);
productRouter
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);
