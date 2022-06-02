import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Cartsection from "./Components/Cartsection";
import SignUp from "./Components/Signup";
import SignIn from "./Components/Signin";
import EmployeeProfile from "./Components/EmployeeProfile";
import { Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Route exact path="/">
        <Header />
        <Cartsection />
      </Route>

      <Route path={"/signup"}>
        <SignUp />
      </Route>
      <Route path={"/signin"}>
        <SignIn />
      </Route>
      {/* <SignUp/>
         <SignIn/> */}
      <Route path={"/employeeProfile"}>
           <EmployeeProfile/>
      </Route>
       
    </React.Fragment>
  );
}

export default App;
