import React from "react";
import { Box, Button, Grid, FilledInput, Select, MenuItem, Typography, makeStyles, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import { Form } from 'react-bootstrap';
import { Editor } from "@tinymce/tinymce-react";
import { Navigate, useNavigate } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';



const useStyles = makeStyles((theme) => ({
    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5 px",
        borderRadius: "5px",
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        cursor: "pointer",

        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color:"#fff"
        }
    },
    included: {
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    }
}));


let stripePromise 

const getStripe = () => {
    if(!stripePromise){
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }
    return stripePromise;
};

const initState = { 
    title: "",
    type: "Full time",
    companyName: "",
    location: "Remote",
    companyUrl: "",
    country: "",
    city: "",
    state: "",
    zipcode: "",
    description: "",
    salarymin: "",
    salarymax: "",
    skills: [],
    }

export default (props) => {
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

    const redirectToCheckout2 = async () => {
        const stripe = require('stripe')('sk_test_51Iq7GdLxbwyf0mcitBtRuEF0EmjYvnqnon3NrOF7UdSXo3wrOL8pLJzT75S61DTZ5OUTsf0658j5eKPm0iQsbVMw00d0uCmCiw');
        const session = await stripe.checkout.sessions.create({
            payment_method_types: [
              'card'
            ],
            line_items: [
              {
                // TODO: replace this with the `price` of the product you want to sell
                // price: '{{PRICE_ID}}',
                price: "price_1LQfPyLxbwyf0mciNRte3IIE",
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: `${window.location.origin}/`,
            cancel_url: `${window.location.origin}/form`,
          });
    };

    const [loading, setLoading ] = useState(false)
    const [jobDetails, setJobDetails] = useState(initState);
    const [contentEditor, setContentEditor] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
        setContentEditor(content);
      }
  
    const handleChange = e => {
        e.persist();
        setJobDetails(oldState => ({
            ...oldState, [e.target.name]: e.target.value,
        }));
    };

    const addRemoveSkill = (skill) =>
     jobDetails.skills.includes(skill)
     ? setJobDetails((oldState) => ({
         ...oldState,
         skills: oldState.skills.filter((s) => s !== skill),
        }))
        : setJobDetails((oldState) => ({
            ...oldState,
            skills: oldState.skills.concat(skill),
        }));

    const handleSubmit = async () => {
        if(jobDetails.title.length == 0 
            && jobDetails.companyName.length == 0 
            && jobDetails.companyUrl.length == 0
            && jobDetails.country.length == 0
            && jobDetails.city.length == 0
            && jobDetails.state.length == 0
            && jobDetails.zipcode.length == 0
            && jobDetails.skills.length == 0 

            ){
            setError(true)
        }

        for( const field in jobDetails){
            if(typeof jobDetails[field] === "string" && !jobDetails[field])
                return;
        }
        if(!jobDetails.skills.length)
        return;
        setLoading(true);
        await props.postJob(jobDetails);
        closeModal();
        setContentEditor("");
        setIsLoading(true)
        navigate('/');
        /*console.log("redirectToCheckout")
        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout(checkoutOptions)
        console.log("Stripe checkout error", error);
        if(error) setStripeError(error.message);
        setIsLoading(false);
        setIsLoading(false);
        navigate('/'); */
    };


    const closeModal= () => {
        setJobDetails(initState)
        setLoading(false);
        props.closeModal();
    };

    const classes = useStyles();
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Go",
        "React",
        "Node",
        "Flutter",
        "Django",
        "Vue",
        "Firebase",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "AWS",
    ];
  
    return(
        <>
            <div className="container mt-5 mb-5 px-5 py-5">
            <Form >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="title" value={jobDetails.title} autoComplete="off" placeholder="Job Title*" disableUnderline fullWidth />
                        {error&&jobDetails.title.length<=0?
                        <label className="text-danger">This field is required</label>:""}
                    </Grid>
                    <Grid item xs={6}>
                        <Select onChange={handleChange} name="type" value={jobDetails.type} fullWidth disableUnderline variant = "filled">
                            <MenuItem value="Full time">Full time</MenuItem>
                            <MenuItem value="Part time">Part time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                            <MenuItem value="Internship">Internship</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} required name="companyName" value={jobDetails.companyName} autoComplete="off" placeholder="Company Name*" disableUnderline fullWidth />
                        {error&&jobDetails.companyName.length<=0?
                        <label className="text-danger">This field is required</label>:""}
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="companyUrl" value={jobDetails.companyUrl} autoComplete="off" placeholder="Job URL*" disableUnderline fullWidth />
                        {error&&jobDetails.companyUrl.length<=0?
                        <label className="text-danger">This field is required</label>:""}
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="country" value={jobDetails.country} autoComplete="off" placeholder="Country*" disableUnderline fullWidth />
                        {error&&jobDetails.country.length<=0?
                        <label className="text-danger">This field is required</label>:""}
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="city" value={jobDetails.city} autoComplete="off" placeholder="City*" disableUnderline fullWidth />
                        {error&&jobDetails.city.length<=0?
                        <label className="text-danger">This field is required</label>:""}
                    </Grid>
                    <Grid item xs={4}>
                        <FilledInput onChange={handleChange} name="state" value={jobDetails.state} autoComplete="off" placeholder="State*" disableUnderline fullWidth />
                        {error&&jobDetails.state.length<=0?
                        <label className="text-danger">This field is required</label>:""}
                    </Grid>
                    <Grid item xs={4}>
                        <FilledInput onChange={handleChange} name="zipcode" value={jobDetails.zipcode} autoComplete="off" placeholder="Zip Code*" disableUnderline fullWidth />
                        {error&&jobDetails.zipcode.length<=0?
                        <label className="text-danger">This field is required</label>:""}
                    </Grid>
                    <Grid item xs={4}>
                        <Select onChange={handleChange} name="location" value={jobDetails.location} fullWidth disableUnderline variant = "filled" >
                            <MenuItem value="Remote">Remote</MenuItem>
                            <MenuItem value="In-office">In-office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <Editor
                            name="description"
                            plugins= "powerpaste, lists advlist"
                            init={{
                            height: 500,
                            menubar: false,
                            toolbar: 'undo redo | formatselect | bold italic | \
                            bullist numlist | outdent indent | h1 h2 | '
                            }}
                            value={jobDetails.description = contentEditor}
                            onEditorChange={handleEditorChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                    <Typography>Salary Min*</Typography>
                        <Select onChange={handleChange} name="salarymin" value={jobDetails.salarymin} fullWidth disableUnderline variant = "filled" >
                            <MenuItem value="$10,000">$10,000</MenuItem>
                            <MenuItem value="$20,000">$20,000</MenuItem>
                            <MenuItem value="$30,000">$30,000</MenuItem>
                            <MenuItem value="$40,000">$40,000</MenuItem>
                            <MenuItem value="$50,000">$50,000</MenuItem>
                            <MenuItem value="$60,000">$60,000</MenuItem>
                            <MenuItem value="$70,000">$70,000</MenuItem>
                            <MenuItem value="$80,000">$80,000</MenuItem>
                            <MenuItem value="$90,000">$90,000</MenuItem>
                            <MenuItem value="$100,000">$100,000</MenuItem>
                            <MenuItem value="$110,000">$110,000</MenuItem>
                            <MenuItem value="$120,000">$120,000</MenuItem>
                            <MenuItem value="$130,000">$130,000</MenuItem>
                            <MenuItem value="$140,000">$140,000</MenuItem>
                            <MenuItem value="$150,000">$150,000</MenuItem>
                            <MenuItem value="$160,000">$160,000</MenuItem>
                            <MenuItem value="$170,000">$170,000</MenuItem>
                            <MenuItem value="$180,000">$180,000</MenuItem>
                            <MenuItem value="$190,000">$190,000</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography>Salary Max*</Typography>
                    <Select onChange={handleChange} name="salarymax" value={jobDetails.salarymax} fullWidth disableUnderline variant = "filled" >
                            <MenuItem value="$10,000">$10,000</MenuItem>
                            <MenuItem value="$20,000">$20,000</MenuItem>
                            <MenuItem value="$30,000">$30,000</MenuItem>
                            <MenuItem value="$40,000">$40,000</MenuItem>
                            <MenuItem value="$50,000">$50,000</MenuItem>
                            <MenuItem value="$60,000">$60,000</MenuItem>
                            <MenuItem value="$70,000">$70,000</MenuItem>
                            <MenuItem value="$80,000">$80,000</MenuItem>
                            <MenuItem value="$90,000">$90,000</MenuItem>
                            <MenuItem value="$100,000">$100,000</MenuItem>
                            <MenuItem value="$110,000">$110,000</MenuItem>
                            <MenuItem value="$120,000">$120,000</MenuItem>
                            <MenuItem value="$130,000">$130,000</MenuItem>
                            <MenuItem value="$140,000">$140,000</MenuItem>
                            <MenuItem value="$150,000">$150,000</MenuItem>
                            <MenuItem value="$160,000">$160,000</MenuItem>
                            <MenuItem value="$170,000">$170,000</MenuItem>
                            <MenuItem value="$180,000">$180,000</MenuItem>
                            <MenuItem value="$190,000">$190,000</MenuItem>
                        </Select>
                    </Grid>
                   
                </Grid>
                <Box mt={2} mb={3}>
                    <Typography>Skills*</Typography>
                    <Grid container alignItems="center">
                        {skills.map((skill) => (
                            <Box display="flex" onClick={() => addRemoveSkill(skill)} className={`${classes.skillChip} ${jobDetails.skills.includes(skill) && classes.included}`} key={skill}>
                                {skill}
                            </Box>
                            
                        ))}
                        {error&&jobDetails.skills.length<=0?
                        <label className="text-danger">This field is required</label>:""}

                   </Grid>
                </Box>
          
                <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>*Required</Typography>
                    <Button onClick={handleSubmit}
                    variant="contained" disableElevation color="primary" disabled={loading}>
                        {loading ? ( <CircularProgress color="secondary" size={22} />
                            ) : ( 
                                "Post Job"
                            )}
                        </Button>

              
                </Box>
                    
                </Form>
               
                </div>
              
           </>
    )
}