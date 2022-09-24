import React,{useEffect} from 'react'
import { firestore, app } from "../components/firebase/config";
import moment from "moment";
const SuccessPage = ()=> {

    const postJob = async (jobDetails) => {
        const timestamp = Date.now()
        await firestore.collection("jobs").add({
            ...jobDetails,
            /*postedOn: moment().startOf('day').fromNow(),*/
            postedOn: moment().format('DD MMMM YYYY'),
            postedOnSorting: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(timestamp),
            /*postedOn: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long',day: '2-digit', hour:'2-digit', minute:'2-digit'}).format(timestamp)*/
        });
        setTimeout(() => {
            localStorage.removeItem("jobDetails");
            window.location.href = "/"
        }, 2000);
      
    };

    const checkJobData = async () =>{
        const jobDetails = localStorage.getItem('jobDetails');
        console.log(jobDetails)
        if (jobDetails !== null){
           const parsedData = JSON.parse(jobDetails);
          await  postJob(parsedData)
           
        }
              
    }

    useEffect(() => {
        checkJobData();
    }, [])
    

  return (
    <div>SuccessPage</div>
  )
}

export default SuccessPage