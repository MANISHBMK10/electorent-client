import Faq from "../models/Faq.js";

export const getFaqs = async (req, res) => {
  try {
    const productId = req.params.productId;
    const faqs = await Faq.find({ productId: productId });
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createFaqs = async (req, res) => {
  try {
    // const productId = req.body.productId;
    console.log(req.body);
    const newFaq = await Faq.create(req.body);
    res.status(201).json({ newFaq, message: "Posted a Faq!" });
  } catch (error) {
    console.log("Error while posting Faq ", error.message);
    res.status(400).end();
  }
};

export const updateFaq = async (req, res) => {
  try {
    let faq = await Faq.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!faq) {
      res.status(404).json({ message: "Faq not found" });
    }
    res.status(200).json(faq);
  } catch (error) {
    res.status(500).end();
  }
};

export const deleteFaq = async (req, res) => {
  try {
    const faq = await Faq.findByIdAndRemove(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: "Faq not found" });
    }
    res.status(200).json(`Faq ${req.params.id} deleted`);
  } catch (error) {
    console.log(error, "Error in deleting Faq");
    res.status(500).end();
  }
};
