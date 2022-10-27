import Review from "../models/Review.js";

export const getReviews = async (req, res) => {
  try {
    const productId = req.params.productId;
    const reviews = await Review.find({ productId: productId }).populate(
      "userId",
      { fullName: 1, avatar: 1 }
    );
    res.status(200).json(reviews);
  } catch (error) {
    console.log(error, "review Error");
    res.status(500).json({ message: error.message });
  }
};

export const createReviews = async (req, res) => {
  try {
    const productId = req.body.productId;
    const newReview = await Review.create({ productId, ...req.body });
    res.status(201).json({ newReview, message: "Posted a Review!" });
  } catch (error) {
    console.log("Error while posting Review ", error.message);
    res.status(400).end();
  }
};

export const updateReview = async (req, res) => {
  try {
    let review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!review) {
      res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).end();
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndRemove(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(`Review ${req.params.id} deleted`);
  } catch (error) {
    console.log(error, "Error in deleting Review");
    res.status(500).end();
  }
};
