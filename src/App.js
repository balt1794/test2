import React from "react";
import "./App.css";


export default function App() {


const handleCheckout = () => {
  fetch("http://localhost:4242/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Send along all the information about the items
    body: JSON.stringify({
      items: [
        {
          id: 1,
          quantity: 5,
        },
        {
          id: 2,
          quantity: 2,
        },
      ],
    }),
  })
   .then(res => {
      if (res.ok) return res.json()
      // If there is an error then make sure we catch that
      return res.json().then(json => Promise.reject
        (json))
    })
    .then(({ url }) => {
    
      // On success redirect the customer to the returned URL
      window.location = url
    })
    .catch(e => {
      console.log(e.error)
      console.log("D WORKS")
    })
  }



  return (
    <>
    
    <button type="submit" onClick={handleCheckout}>
        Checkout
      </button>
 
    </>

  );
}