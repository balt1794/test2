import React from "react";
import { Container, Button } from 'react-bootstrap';
import Typography from "@material-ui/core/Typography";

import "./index.css"

const Pricing = () => {

return (
<>

  <Container>
  <div className="maincontainer">
       <section>
          <div class="container py-5">
            
            <header class="text-center mb-5">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h1 className="titl">Post a Job</h1>
                  <p className="para">Get 10x more visibility 👀 by posting on <b className="HJD">HireJrDevs.</b><br /></p>
                </div>
              </div>
            </header>
           
            <div class="row text-center align-items-end">
             
              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h4 text-uppercase font-weight-bold mb-4">Basic</h1>
                  <h2 class="h1 font-weight-bold">$30<span class="text-small font-weight-normal ml-2"> per job</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-success"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> ✅ Job Stays up for 1 month</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> ❌ Email Blast to Developers Database</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> ❌ Job Card Highlighted</li>
                    {/*  <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> ❌ Job Starts days at top of the page</li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Sed ut perspiciatis</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Sed ut perspiciatis</del>
                    </li>
*/}
                  </ul>
                  <a href="#end" class="btn btn-success btn-block p-2 shadow rounded-pill">Get Started</a>
                </div>
              </div>
             
              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h4 text-uppercase font-weight-bold mb-4">Premium</h1>
                  <h2 class="h1 font-weight-bold">$45<span class="text-small font-weight-normal ml-2"> per job</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-success"></div>
                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> ✅ Job Stays up for 2 months</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> ✅ Email Blast to Developers Database</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> ✅  Job Card Highlighted</li>
                   {/*   <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Nam libero tempore</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Sed ut perspiciatis</del>
                    </li>
                    */}
                  </ul>
                  <a href="#end" class="btn btn-success btn-block p-2 shadow rounded-pill">Coming Soon</a>
                </div>
              </div>
             {/*
              <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h4 text-uppercase font-weight-bold mb-4">Enterprise</h1>
                  <h2 class="h1 font-weight-bold">$899<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Nam libero tempore</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                  </ul>
                  <a href class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
*/}
             
            </div>
          </div>
        </section>
      </div>

      <hr id="end"></hr>


  </Container>

</>
  );
}

export default Pricing;
