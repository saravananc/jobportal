import React, { useEffect, useState } from "react";
import LandingHeader from "./LandingHeader";
import LandingSearch from "./LandingSearch";
import Signin from "./Signin";
import Signup from "./Signup";
import Footer from "./Footer";
import JobSearch from "./JobSearch";
import Jobdescription from "./Jobdescription";
import Profile from "./Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppliedJobs from "./AppliedJobs";
import JobPost from "./JobPost";

function App() {
  const loginValue = localStorage.getItem("accesstoken");
  // console.log(loginValue, "loginValue");
  const [isLoggedIn, setIsLoggedIn] = useState(loginValue !== null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  useEffect(() => {
    if (window.location.pathname === "/login")
      localStorage.removeItem("accesstoken");
  }, []);
  return (
    <>
      <BrowserRouter>
    {window.location.pathname!=="/jobpost"?
        <LandingHeader isLoggedIn={isLoggedIn} />:""}
        <Routes>
          <Route path="/" element={<LandingSearch />} />
          <Route
            path="/login"
            element={<Signin onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobsearch" element={<JobSearch />} />
          <Route
            path="/jobsearch/jobdescription/:id"
            element={<Jobdescription isLoggedIn={isLoggedIn}/>}
          />
         
          <Route path="/profile" element={<Profile />} />
          <Route path="/appliedjobs" element={<AppliedJobs />} />
        </Routes>
        {window.location.pathname!=="/jobpost"?
        <Footer />:""}
        
        <Routes>
        <Route path="/jobpost" element={<JobPost />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
