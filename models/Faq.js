import mongoose from "mongoose";

const faqSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products", // linking it to the user schema
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Faqs", faqSchema);
