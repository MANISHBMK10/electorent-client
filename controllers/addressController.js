import Address from "../models/Address.js";

// gets all the address
export const getAddress = async (req, res) => {
  try {
    console.log(req.params);
    // gets user id from the frontend and finds the respective address
    const address = await Address.find({ userId: req.params.userId });
    if (!address) {
      res.status(404).json({ message: "User not found" });
    }
    // returns the found adress
    res.status(200).json(address);
  } catch (error) {
    console.log(error, "Error in fetching the address");
    res.status(500).end();
  }
};

export const createAddress = async (req, res) => {
  try {
    // gets all required data from the frontend to create address
    const userId = req.body.userId;
    const newAddress = await Address.create({ userId, ...req.body });
    // returns the created address
    res.status(201).json(newAddress);
  } catch (error) {
    console.log("Error while creating address", error.message);
    res.status(400).end();
  }
};

export const updateAddress = async (req, res) => {
  try {
    // gets the update info from the frontend and updates using addressId
    let address = await Address.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // checks if the address is not found and returns error
    if (!address) {
      res.status(404).json({ message: "Address not found" });
    }
    // returns the updated address if there exists one
    res.status(200).json(address);
  } catch (error) {
    res.status(500).end();
  }
};

export const deleteAddress = async (req, res) => {
  try {
    // deletes the address based on the address id
    const address = await Address.findByIdAndRemove(req.params.id);
    // error if no such address is found
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }
    // returns success if the address is found and deleted
    res.status(200).json(`Address ${req.params.id} deleted`);
  } catch (error) {
    console.log(error, "Error in deleting address");
    res.status(500).end();
  }
};
