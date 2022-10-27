import { User } from "../models/User.js";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../config/config.js";

export const getAllUsers = async (req, res) => {
  try {
    // if there is  a email in the request's query then it sends that user
    if (req.query.email) {
      const user = await User.findOne({ email: req.query.email });
      return res.status(200).json({
        message: "User Create check",
        user,
      });
    }
    // if there is no email in the request's query then returns all the users
    const users = await User.find({});
    res.status(200).json({
      message: "all users retreived",
      data: users,
    });
  } catch (error) {
    console.log("error in getting all of the users: ", error);
    res.status(500).end();
  }
};
// creates the user
export const createUser = async (req, res) => {
  try {
    // takes all the required feilds from the user and creates a user obj
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "user created",
      data: newUser,
    });
  } catch (error) {
    console.log("error in creating the user: ", error);
    res.status(400).end();
  }
};

export const getUser = async (req, res) => {
  try {
    // gets the user based on the userId
    const userId = req.params.uid;
    const user = await User.findById(userId);
    res.status(200).json({
      message: "user retreived",
      data: user,
    });
  } catch (error) {
    console.log("error in fetching the user: ", error);
    res.status(400).end();
  }
};

export const updateUser = async (req, res) => {
  try {
    const newUser = req.body;
    // console.log(req.body);
    // updates the user based on the updated information
    if (req.file) {
      // if there is a file upload then it will upload the file
      // to cloudinary and get link from there
      cloudinary.config({
        cloud_name: CLOUDINARY_CLOUD_NAME,
        api_key: CLOUDINARY_API_KEY,
        api_secret: "IzAUHOuRY5wtn5mSK1E6gSkRdec",
      });
      // uploads image to cloudinary
      const image = await cloudinary.uploader.upload(req.file.path);
      console.log("uploaded image to cloudinary");
      console.log(image.url);
      // stores the image in the database
      newUser.avatar = image.url;
    }
    // updates the user info
    const userId = req.params.uid;
    const user = await User.findByIdAndUpdate(userId, newUser, {
      new: true,
    });
    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "User updated sucessfully", user });
  } catch (error) {
    console.log("error in update the user: ", error);
    res.status(500).end();
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.uid;
    // deletes the user based on the id of the user
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      message: "deleted user sucessfully",
    });
  } catch (error) {
    console.log("error in deleting the user: ", error);
    res.status(500).end();
  }
};
