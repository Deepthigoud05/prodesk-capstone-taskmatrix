const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "TaskMatrix Pro",
              description: "Premium Project Management Plan",
            },
            unit_amount: 999,
          },
          quantity: 1,
        },
      ],

      mode: "payment",

      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/dashboard",
    });

    res.json({
      id: session.id,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};