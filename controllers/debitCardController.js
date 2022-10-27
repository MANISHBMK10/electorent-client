import { debitCard } from "../models/DebitCards.js";

export const placeDebitCard = async (req, res) => {
  try {
    // assume user is logged in and we have user in req.user
    const userId = req.params.userId;
    const newDebitCard = await debitCard.create({
      userId,
      ...req.body,
    });
    res.status(201).json({
      message: "Debit card added sucessfully",
      debitCard: newDebitCard,
    });
  } catch (error) {
    console.log("error in adding the card ", error);
    res.status(500).end();
  }
};

export const getAllDebitCards = async (req, res) => {
  try {
    const userDebitCards = await debitCard.find({});
    res.status(200).json({
      userDebitCards,
    });
  } catch (error) {
    console.log(
      "error in retreiving the debit card details of the user",
      error
    );
    res.status(500).end();
  }
};

export const getUserDebitCards = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userDebitCards = await debitCard.find({
      userId,
    });
    res.status(200).json({
      userDebitCards,
    });
  } catch (error) {
    console.log(
      "error in retreiving the debit card details of the user",
      error
    );
    res.status(500).end();
  }
};

export const updateDebitCard = async (req, res) => {
  try {
    const debitCardId = req.params.id;
    const newDebitCardDetails = req.body;
    const newDebitCard = await debitCard.findByIdAndUpdate(
      debitCardId,
      newDebitCardDetails,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "updated debit card sucessfully",
      newDebitCard: newDebitCard,
    });
  } catch (error) {
    console.log("error in updating the debit card", error);
    res.status(500).end();
  }
};

export const deleteDebitCard = async (req, res) => {
  try {
    const debitCardId = req.params.id;
    const deletedDebitCard = await debitCard.findByIdAndRemove(debitCardId);
    if (!deletedDebitCard) {
      return res.status(404).json({ message: "Address not found" });
    }
    // unlink all the user related data
    res.status(200).json({
      message: "deleted debit card sucessfully",
    });
  } catch (error) {
    console.log("error in deleting the debit card details of the user", error);
    res.status(500).end();
  }
};
