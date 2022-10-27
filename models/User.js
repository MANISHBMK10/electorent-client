import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  panNumber: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  address: {
    type: String,
  },
  job: {
    type: String,
  },
  dob: {
    type: String,
  },
  avatar: {
    type: String,
    required: true,
    default: "https://cdn-icons-png.flaticon.com/128/1177/1177568.png",
  },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  deliveryAddress: {
    type: String,
    default: "address/",
  },
  debitCards: {
    type: String,
    default: "debitcard/",
  },
  upi: {
    type: String,
    default: "upi/",
  },
  myOrders: {
    type: String,
    default: "orders/",
  },
  cart: {
    type: String,
    default: "",
  },
});

export const User = mongoose.model("User", userSchema);
