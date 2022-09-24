import React from "react";
import { Box, Grid, Typography, Button, Paper, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import differenceInBusinessDays from "date-fns/differenceInBusinessDays";
import { DateRangeOutlined } from "@material-ui/icons";
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        border:"1px solid #d4d4d4",
        cursor: "pointer",
        transitions: '.3s',

    "&:hover":{
        boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
        borderLeft: "5px solid #D5F591",
    },
},
    companyName: {
        fontSize: "13.5px",
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0.75),
        borderRadius: "5px",
        display: "inline-block",
        fontWeight: 600,
    },
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    },
  
}));


export default (props) => {
    const classes = useStyles();
    
    
    const dat = new Intl.DateTimeFormat('en-US', {day: '2-digit'}).format(Date.now())
    const d = moment().add(-1, "days").format('DD MMMM YYYY');
    const datee = moment().add(48, "hours") 
    const de = moment().diff(d, "days")
    console.log(de);

    return(
        <>
    
      
        

    <Box p={2} className={classes.wrapper}>
        <Grid container spacing={3} alignItems="center">
            <Grid item xs>
                <Typography variant="subtitle1">{props.title}</Typography>
                <Typography className={classes.companyName} variant="subtitle1">{props.companyName}</Typography>
            </Grid>
            <Grid item container xs>
                {props.skills?.slice(0,2).map((skill) => (
                <Grid key={skill} className={classes.skillChip} item>
                    
                    {skill}
                </Grid>
                ))}
            </Grid>
            <Grid item container direction="column" alignItems="flex-end" xs>
                <Grid item>
                    <Typography variant="caption">
                    {moment().diff(props.postedOn, "days")}d ago | {props.type} | {props.location}
                    </Typography>
                </Grid>
                <Grid item>
                    <Box mt={2}>
                        <Button onClick={props.open} variant="contained" color="primary">View</Button>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    </>
    )
}