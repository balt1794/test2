import React from "react";
import { Typography, makeStyles, IconButton} from "@material-ui/core";
import { useState } from "react";
import { Alert, Form } from 'react-bootstrap';
import firebase from "firebase";
import { firestore } from "../firebase/config";
import {Close as CloseIcon, Style } from '@material-ui/icons'
import './index.css'




const useStyles = makeStyles((theme) => ({


    formContainer:{
        height: "6vh",
        width: "100%",
        position: "relative",
        padding:"4px",
        minWidth:"300px",
        borderRadius:"5px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1);",
        background: "rgba(255, 255, 255, .5)",
        border: "solid 1px rgba(255, 255, 255, 0.2)",
        zIndex: "2",
        display: "flex",
        
    },
    inputContainer:{
        padding: "1px",
        borderRadius: "5px",
        border: "none",
        width: "80%",
        outline: "none",
    },
    wrap:{
        background: "rgba(255, 255, 255, 1)",
        display: 'flex',
        boxShadow: "0px 1px 5px rgba(0, 0, 0.1)",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems:"center",
        overflow: "hidden",    
        height: "5vh",  
        paddingTop: "40px",
        paddingBottom: "40px",
        
        "& > *":{
            flex: 1,
            height: "40px",
            margin: "1px",
        },
    },
    iconButton:{
        marginTop: "2px",
        width: "10px",
        height: "10px",
        color: "black",
        marginLeft: "3px"
    },
}));


export default (props) => {
 const classes = useStyles();
 const [input, setInput] = useState("")
 const [message, setMessage] = useState("")
 const [isOpen, setIsOpen] = useState(true);
 const inputHandler = (e) =>{
    setInput(e.target.value)
 }

 const submitHandler = (e) =>{
    e.preventDefault();
    if(input){
        firestore.collection("emails").add({
            email: input,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
        setMessage("Thanks for subscribing!!")
        setTimeout(()=> {
            setMessage("");
            setIsOpen(false);
        }, 2000)
        
    }
 }
 if(!isOpen){
    return null
}
    return(
        <>
       
       <div className="catch-emails" data-tag="">
            <p className="text-center">Get jobs sent to your inbox</p>
            <form onSubmit={submitHandler} className="form">
            <input className="input" type="email" placeholder="Email" onChange={inputHandler} value={input}></input>
            <button type="submit" className="button" variant="contained" disableElevation color="secondary">Submit</button>
            <Typography><IconButton className={classes.iconButton}>
                <CloseIcon onClick={()=> setIsOpen(false)}/>
            </IconButton></Typography>
            </form>
            {message && <Alert variant="outlined" className="text-center" severity="success"><Typography variant="p"><b>{message}</b></Typography></Alert>}
        </div>
        </>
    )
}