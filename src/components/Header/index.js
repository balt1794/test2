import React from 'react';
import {Box, Grid, Typography, makeStyles, Hidden,} from "@material-ui/core"
import Typical from "react-typical";



const useStyles = makeStyles({
    wrapper2:{
        backgroundColor: "#fff",
        display: 'flex',
        boxShadow: "0px 1px 5px rgba(0, 0, 0.1)",
        borderRadius: "5px",
        justifyContent: "center",
        marginLeft: "25%" ,
        width:"50%",
        "& > *":{
            flex: 1,
            height: "45px",
            margin: "8px",
        },
    },
    heroBox: {
        width: '100%',
        display: 'flex',
        minHeight: '400px',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#C04848',  /* fallback for old browsers */
        background: 'linear-gradient(rgb(213,245,145,0.8), rgb(68,183,139,0.8)), url("https://wallpaperaccess.com/full/1947484.jpg")', /* Chrome 10-25, Safari 5.1-6 */
        //background: 'linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url("https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg")', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      },
      gridContainer: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1300px',
        padding: '40px',
      },
      title: {
        paddingBottom: '20px',
        fontWeight: '700',  
        '@media (max-width: 70em)' : {
          fontSize: '3em'
        }
      },
      
      subtitle: {
        paddingBottom: '5px',
        fontWeight: '200',
        '@media (max-width: 70em)' : {
          fontSize: '1.5em'
        }
      },
      largeImage: {
        
      },

      header: {
        height: '400px',
        width: '100%',
        textAlign: 'center',
        paddingTop: '100px',
        color: 'white',
        overFlown: 'hidden',
        backgroundColor: '#C04848',  /* fallback for old browsers */
        background: 'linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url("https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg")', /* Chrome 10-25, Safari 5.1-6 */
        //background: 'linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url("https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg")', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
});

export default props => 
{
    const classes = useStyles();
    return(


       <>
      <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h1"  className={classes.title}>
             <Typical
            steps={[
              "Hire Jr Devs" , 
              4000
            ]}
            loop={Infinity}
            wrapper="b"
          />
          </Typography>
          <Typography variant="h4" className={classes.subtitle}>
            
            Start your developer journey with us and find opportunities at top companies who are willing to bet on you. 
          </Typography>

        </Grid>
        <Grid item xs={12} md={5} className={classes.largeImage}>
        
        </Grid>
      </Grid>
      
    </Box>

</>
        
  
      
    )
}