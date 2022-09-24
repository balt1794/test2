import React from "react";
import { Box, Button, Grid, FilledInput, Select, Link, MenuItem, Dialog, DialogContent, DialogActions, DialogTitle, Typography, makeStyles, IconButton, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import {Close as CloseIcon } from '@material-ui/icons'
import { format } from 'date-fns'
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    info: {
        '& > *': {
            margin: '5px'
        }
    },
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "16px",
        borderRadius: "5px",
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    },
    p:{
        backgroundColor: "#44B78B",
    }
}));



export default (props) => {
    const classes = useStyles();
    return (
    <Dialog open={!!Object.keys(props.job).length} maxWidth="md">
        <DialogTitle  className={classes.p}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <h1><b>{props.job.title} - {props.job.companyName}</b></h1>
                <IconButton onClick={props.closeModal}>
                    <CloseIcon  />
                </IconButton>
            </Box>
        </DialogTitle>
    <DialogContent>

    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
            <h2 className="mb-2 mt-2" variant="h5"> Location:</h2>
        </Grid>
        <Grid item xs={12}>
            <p variant="p"> {props.job.type} - {props.job.location} </p>
        </Grid>
        <Grid>
            <p  variant="p">{props.job.country}, {props.job.city}, {props.job.state}, {props.job.zipcode}</p>
        </Grid>
        <Grid item xs={12}>
            <h2 className="mb-2 mt-2" variant="h5">Description:</h2>
        </Grid>
        <Grid item xs={12} style={{overflow: "hidden"}}>
            <p  variant="p"><div dangerouslySetInnerHTML={{__html: props.job.description}}/></p>
        </Grid>
        <Grid item xs={12}>
            <h2 className="mb-2 mt-2" variant="h5">Company:</h2>
        </Grid>
        <Grid item xs={12}>
            <p  variant="p"> {props.job.companyName}</p>
        </Grid>
        <Grid item xs={12}>
            <h2 className="mb-2 mt-2" variant="h5">Salary:</h2>
        </Grid>
        <Grid item xs={12}>
            <p  variant="p"> {props.job.salarymin} - {props.job.salarymax} </p>
        </Grid>
        <Grid item xs={12}>
            <h2 className="mb-2 mt-2" variant="h5">Skills:</h2>
        </Grid>
        <Grid item xs={12}>
            <Grid container alignItems="center">
                {props.job.skills &&
                props.job.skills.map((skill) => (
            <Grid item key={skill} className={classes.skillChip}>
                {skill}
            </Grid>
                ))}
            </Grid>
        </Grid>
    </Grid>
    </DialogContent>
    <DialogActions>
        <Button variant="contained" color="primary" href={props.job.companyUrl} target="_blank">Apply</Button>
    </DialogActions>
</Dialog>

)}