import mongoose from "mongoose";

const debitCardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  avatar: {
    type: String,
    required: true,
  },
  cardType: {
    type: String,
    required: true,
  },
  cardNo: {
    type: String,
    required: true,
  },
  cvv: {
    type: Number,
    required: true,
  },
  expiry: {
    type: String,
    required: true,
  },
  nameOnCard: {
    type: String,
    required: true,
  },
});

export const debitCard = mongoose.model("DebitCard", debitCardSchema);
