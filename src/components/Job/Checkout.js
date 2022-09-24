import React from "react";
import {loadStripe} from '@stripe/stripe-js';
import { useState } from "react";
import { Box, Button, Grid, FilledInput, Select, MenuItem, Typography, makeStyles, CircularProgress } from "@material-ui/core";


let stripePromise 

const getStripe = () => {
    if(!stripePromise){
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }
    return stripePromise;
};


const Checkout = () => {
    const [stripeError, setStripeError] = useState(null);
    const [isloading, setIsLoading] = useState(false)
    const item = {
        price: "price_1LQfPyLxbwyf0mciNRte3IIE",
        quantity: 1,
    };
const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/`,
    cancelUrl: `${window.location.origin}/form`,
}

const redirectToCheckout = async () => {
    setIsLoading(true)
    console.log("redirectToCheckout")
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout(checkoutOptions)
    console.log("Stripe checkout error", error);
    if(error) setStripeError(error.message);
    setIsLoading(false);
};
if(stripeError) alert(stripeError);


  return (
    <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
                    <Button onClick={redirectToCheckout}
                    variant="contained" disableElevation color="primary" disabled={isloading}>
                              {isloading ? "Loading...": "Post Job"} 
                        </Button>
                </Box>
  );
};

export default Checkout;