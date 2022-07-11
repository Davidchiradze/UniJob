import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Cartsection from "./Components/Cartsection";
import SignUp from "./Components/Signup";
import SignIn from "./Components/Signin";
import EmployeeProfile from "./Components/EmployeeProfile";
import { Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import PostAJob from "./Components/PostAJob";
import JobsList from "./Components/JobsList";
import NotAuth from "./Components/NotAuth";
import CvList from "./Components/CvList";
function App() {
  const [texts, setTexts] = useState("");
  const [signinResponse, setSigninResponse] = useState(false);

  const fetchData = async () => {
    const respone = await fetch(
      `http://78.47.50.12/jofy/api/site_info?key=sXuWClO2NvVYNGG9psuXHM924rOT7qIf`
    );
    const result = await respone.json();
    setTexts(result.texts);
    return result.texts;
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(signinResponse.status);
  return (
    <React.Fragment>
      <Route exact path="/">
        <Header texts={texts} />
        <Cartsection texts={texts} />
      </Route>

      <Route path={"/signup"}>
        <SignUp />
      </Route>

      <Route path={"/signin"}>
        <SignIn
          setSigninResponse={setSigninResponse}
          signinResponse={signinResponse}
        />
      </Route>

      {signinResponse.status === "success" && (
        <Route path={"/employeeProfile"}>
          <EmployeeProfile />
        </Route>
      )}

      <Route path={"/postajob"}>
        <PostAJob />
      </Route>
      <Route path={"/cvlist"}>
        <CvList />
      </Route>
      <Route path={"/trainer"}>
        <div>Coming soon !</div>
      </Route>
      <Route path={"/jobslist"}>
        <JobsList />
      </Route>
    </React.Fragment>
  );
}

export default App;
