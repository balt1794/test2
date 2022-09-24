import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { Button, ThemeProvider, Grid, CircularProgress } from "@material-ui/core";
import theme from "../theme/theme"
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/Job/JobCard";
import NewJobModal from "../components/Job/NewJobModal";
import { firestore, app } from "../components/firebase/config";
import {Close as CloseIcon } from '@material-ui/icons'
import ViewJobModal from "../components/Job/ViewJobModal";
import SignUp from "../components/SignUp";
import BetaAlert from "../components/BetaAlert";



export default () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [newJobModal, setNewJobModal] = useState(false);
  const [viewJob, setViewJob] = useState({});

  const fetchJobs = async() =>{
    setCustomSearch(false);
    setLoading(true);
    const req = await firestore.collection("jobs").orderBy("postedOnSorting", "desc").get();
    const tempJobs = req.docs.map((job) => ({...job.data(), id: job.id, postedOn: job.data().postedOn }));
    setJobs(tempJobs)
    setLoading(false);
  };

  const postJob = async (jobDetails) => {
    const timestamp = Date.now()
     await firestore.collection("jobs").add({
       ...jobDetails,
       postedOn: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long',day: '2-digit'}).format(timestamp)
     });
     fetchJobs();
   };
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobsCustom = async(jobSearch) =>{
    setLoading(true);
    setCustomSearch(true);
    const req = await firestore
    .collection("jobs")
    .orderBy("title", "desc")
    .where("location", "==", jobSearch.location)
    .where("type", "==", jobSearch.type)
    .get();
    const tempJobs = req.docs.map((job) => ({...job.data(), id: job.id, postedOn: job.data().postedOn, }));
    setJobs(tempJobs)
    setLoading(false);
  };

  return (
  <ThemeProvider theme={theme}>
    <Navigation />
    <Header />
    <NewJobModal closeModal={() => setNewJobModal(false)} newJobModal={newJobModal} postJob={postJob}/> 
    <ViewJobModal  job={viewJob} closeModal={() => setViewJob({})}/>
    <Box mb={3} mt={5}>
  
    <Grid container justifyContent='center'>
      <Grid item xs={10}>

       <SearchBar fetchJobsCustom={fetchJobsCustom}/>
       
       <SignUp/>
       {
         loading ? (
       <Box display="flex" justifyContent="center"><CircularProgress /></Box>
         ) : (
           <>
           {customSearch && (
             <Box my={2} display="flex" justifyContent="flex-end">
               <Button onClick={fetchJobs}>
                 <CloseIcon size={20}/>
                 Custom Search
                </Button>
              </Box>
           )}
          {jobs.map((job) => (
            <JobCard open={() => setViewJob(job)} key={job.id} {...job}/>
            ))}
            </>
         )}
      </Grid>
    </Grid>
    </Box>
 
  </ThemeProvider>
  );
};
