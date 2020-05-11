import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config()

const stripe = Stripe(process.env.STRIPE_TOKEN);

export const makePayment = async (token, amount, currency, description) => {
    const charge = await stripe.charges.create({
        amount,
        currency,
        description,
        source: token,
    })
    return charge
}