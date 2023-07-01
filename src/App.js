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
        <LandingHeader isLoggedIn={isLoggedIn} />
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
        <Footer />
      </BrowserRouter>

      {/* <Jobdescription/> */}

      {/* <LandingSearch /> */}
      {/* <Signin /> */}
      {/* <Signup /> */}
    </>
  );
}

export default App;
