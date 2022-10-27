import express from "express";
import "dotenv/config";
export const paymentRouter = express.Router();

import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
paymentRouter.post("/", async (req, res) => {
  const { product, token } = req.body;
  console.log("PRODUCT ", product);
  console.log("PRICE ", product.price);

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create({
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `purchase of ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            country: token.card.address_country,
          },
        },
      });
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
});
