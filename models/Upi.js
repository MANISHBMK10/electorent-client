import mongoose from "mongoose";

const upiSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  avatar: {
    type: String,
    required: true,
  },
  upiType: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  cardNo: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
});

export const upi = mongoose.model("Upi", upiSchema);
