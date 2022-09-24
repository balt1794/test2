// This is your test secret API key.
const stripe = require('stripe')('sk_test_51Iq7GdLxbwyf0mcitBtRuEF0EmjYvnqnon3NrOF7UdSXo3wrOL8pLJzT75S61DTZ5OUTsf0658j5eKPm0iQsbVMw00d0uCmCiw');
const express = require('express');
const app = express();

app.use(express.json())

const cors = require("cors")
app.use(
  cors({
    origin: "http://localhost:3000",
    
  })
)

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "JavaScript Tutorial" }],
  [2, { priceInCents: 15000, name: "Ultimate CSS tutorial" }],
])

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {
  try {
    // Create a checkout session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      // For each item use the id to get it's details
      // Take that information and convert it to Stripe's format
      line_items: req.body.items.map(({ id, quantity }) => {
        const storeItem = storeItems.get(id)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: quantity,
        }
      }),
      // Set a success and cancel URL we will send customers to
      // They are complete urls
      success_url: "http://localhost:3000/success.html",
      cancel_url: "http://localhost:3000//cancel.html",
    })

    res.json({ url: session.url })

  } catch (e) {
    // If there is an error send it to the client
    res.status(500).json({ error: e.message })
    res.sendStatus(200)
  }
})

const bodyParser = require('body-parser');

app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
  const event = request.body;

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  response.json({received: true});
});


app.listen(4242, () => console.log('Running on port 4242'));