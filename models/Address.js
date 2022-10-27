import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  locationName: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("Addresses", addressSchema);
