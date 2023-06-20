import React from "react";
import LandingHeader from "./LandingHeader";
import LandingSearch from "./LandingSearch";
import Signin from "./Signin";
import Signup from "./Signup";
import Footer from "./Footer";
import JobSearch from "./JobSearch";
import Jobdescription from "./Jobdescription";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <LandingHeader />
        <Routes>
          <Route path="/" element={<LandingSearch/>}/>
          <Route path="/login" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/jobsearch" element={<JobSearch/>}/>
          <Route path="/jobsearch/jobdescription/:id" element={<Jobdescription/>}/>
        
        </Routes>
        <Footer/>
        
      </BrowserRouter>

      {/* <Jobdescription/> */}
      
      {/* <LandingSearch /> */}
      {/* <Signin /> */}
      {/* <Signup /> */}
    </>
  );
}

export default App;
