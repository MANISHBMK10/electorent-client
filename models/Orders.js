import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  qty: {
    type: Number,
    required: true,
  },
  orderedOn: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  deliveredOn: {
    type: String,
  },
});

export const Order = mongoose.model("order", OrderSchema);
