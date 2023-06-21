import React, { useState } from "react";
import LandingHeader from "./LandingHeader";
import LandingSearch from "./LandingSearch";
import Signin from "./Signin";
import Signup from "./Signup";
import Footer from "./Footer";
import JobSearch from "./JobSearch";
import Jobdescription from "./Jobdescription";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <BrowserRouter>
      <LandingHeader isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<LandingSearch/>}/>
          <Route
            path="/login"
            element={<Signin onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
          />
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
