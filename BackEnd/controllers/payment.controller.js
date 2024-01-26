const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const PaymentController = {
    async checkout(req, res) {
        try {
            const amount = parseInt(req.params.amount);
            if (isNaN(amount)) {
                return res.status(400).json({ error: 'Invalid amount' });
            }            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                line_items: req.body.items.map(item => {
                    return {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: "abc"
                            },
                            unit_amount: amount
                        },
                        quantity: 1
                    }
                }),
                success_url: `${process.env.SERVER_URL}/successCheckout`,
                cancel_url: `${process.env.SERVER_URL}/cancelCheckout`
            });
            res.json({url: session.url});
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }
}

module.exports = PaymentController;
