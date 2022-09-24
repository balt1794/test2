import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";

const Cancel = () => {
    return(
        <>
        <Navbar/>
        <div className="text-center"><h1>You have cancelled the transaction. You can try again any time.</h1></div>
        </>
    )
}

export default Cancel;