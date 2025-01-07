import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  //   apiVersion: "2022-11-2024-12-18.acacia",
  typescript: true,
});
