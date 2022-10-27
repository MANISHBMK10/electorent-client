import { Order } from "../models/Orders.js";

export const placeOrder = async (req, res) => {
  try {
    // assume user is logged in and we have user in req.user
    // const userId = "6241f03cfae38ce4a063e0ff";
    const userId = req.body.userId;
    const newOrder = await Order.create({
      userId,
      ...req.body,
      status: "ordered",
    });
    res
      .status(201)
      .json({ message: "order placed sucessfully", orderId: newOrder.id });
  } catch (error) {
    console.log("error in placing the order ", error);
    res.status(500).end();
  }
};
export const placeMultipleOrders = async (req, res) => {
  try {
    // gets order details from the req.body and order details
    const userId = req.body.userId;
    const orderedOn = req.body.orderedOn;
    const orders = req.body.orders;
    console.log(res.body);
    // places the order one by one
    orders.forEach(async (order) => {
      const orderDetails = await Order.create({
        userId,
        ...order,
        orderedOn,
        status: "ordered",
      });
      console.log(orderDetails);
    });
    res.status(200).json({ message: "orders sucessfully placed" });
  } catch (error) {
    console.log("error in placing the order ", error);
    res.status(500).end();
  }
};
export const getAllOrders = async (req, res) => {
  try {
    // finds all orders and returns them
    const userOrders = await Order.find({});
    res.status(200).json({
      userOrders,
    });
  } catch (error) {
    console.log("error in retreiving the order details of the user", error);
    res.status(500).end();
  }
};

export const getUserOrders = async (req, res) => {
  try {
    // finds all orders based on the user id and returns them
    const userId = req.params.userId;
    const userOrders = await Order.find({
      userId,
    }).populate("productId");
    res.status(200).json({
      userOrders,
    });
  } catch (error) {
    console.log("error in retreiving the order details of the user", error);
    res.status(500).end();
  }
};

export const updateOrder = async (req, res) => {
  try {
    // updates the order details based on the order Id
    const orderId = req.params.orderId;
    const newOrderDetails = req.body;
    const order = await Order.findByIdAndUpdate(orderId, newOrderDetails, {
      new: true,
    });
    res.status(200).json({
      message: "updated order sucessfully",
      order: order,
    });
  } catch (error) {
    console.log("error in updating the orders", error);
    res.status(500).end();
  }
};

export const deleteOrder = async (req, res) => {
  try {
    // deletes the orders based on the orderId
    const orderId = req.params.orderId;
    const order = await Order.findByIdAndDelete(orderId);
    // unlink all the user related data
    res.status(200).json({
      message: "deleted order sucessfully",
    });
  } catch (error) {
    console.log("error in deleting the order details of the user", error);
    res.status(500).end();
  }
};
