import { upi } from "../models/Upi.js";

export const placeUpi = async (req, res) => {
  try {
    // assume user is logged in and we have user in req.user
    const userId = req.params.userId;
    const newUpi = await upi.create({
      userId,
      ...req.body,
    });
    res.status(201).json({
      message: "UPI added sucessfully",
      upiId: newUpi.id,
    });
  } catch (error) {
    console.log("error in adding the UPI ", error);
    res.status(500).end();
  }
};

export const getAllUpis = async (req, res) => {
  try {
    const userUpi = await upi.find({});
    res.status(200).json({
      userUpi,
    });
  } catch (error) {
    console.log("error in retreiving the UPI details of the user", error);
    res.status(500).end();
  }
};

export const getUserUpis = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userUpi = await upi.find({
      userId,
    });
    res.status(200).json({
      userUpi,
    });
  } catch (error) {
    console.log("error in retreiving the UPI details of the user", error);
    res.status(500).end();
  }
};

export const updateUpi = async (req, res) => {
  try {
    const upiId = req.params.upiId;
    const newUpiDetails = req.body;
    const newUpi = await upi.findByIdAndUpdate(upiId, newUpiDetails, {
      new: true,
    });
    res.status(200).json({
      message: "updated UPI sucessfully",
      newUpi: newUpi,
    });
  } catch (error) {
    console.log("error in updating the UPI", error);
    res.status(500).end();
  }
};

export const deleteUpi = async (req, res) => {
  try {
    const upiId = req.params.upiId;
    const deleteUpi = await upi.findByIdAndDelete(upiId);
    // unlink all the user related data
    res.status(200).json({
      message: "deleted UPI sucessfully",
    });
  } catch (error) {
    console.log("error in deleting the UPI details of the user", error);
    res.status(500).end();
  }
};
