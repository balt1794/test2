import React from "react";
import Jobs from "./pages/jobs"
import Form from "./pages/form"
import {Routes, Route} from "react-router-dom"
import SuccessPage from "./pages/successPage";




export default () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Jobs/>} />
        <Route exact path='/form' element={<Form/>} />
        <Route exact path='/' element={<Jobs/>} />
        <Route exact path='/form' element={<Form/>} />
        <Route exact path='/success' element={<SuccessPage />} />
      </Routes>
      
    </div>
  );
};
