// Configuration for the mongo(ose, Db)
import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";
export const db = mongoose.connect(MONGO_URL, (e) => {
  if (e) {
    return console.error("error in connection to the database: ", e);
  }
  console.log("Connected to the databse");
});
