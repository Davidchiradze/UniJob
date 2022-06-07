import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Cartsection from "./Components/Cartsection";
import SignUp from "./Components/Signup";
import SignIn from "./Components/Signin";
import EmployeeProfile from "./Components/EmployeeProfile";
import { Route } from "react-router-dom";
function App() {


async function test (){
  const respone = await fetch(`http://78.47.50.12/jofy/api/site_info?key=sXuWClO2NvVYNGG9psuXHM924rOT7qIf`);
  const result = await respone.json();
  console.log(result);
}

test();


  return (
    <React.Fragment>
      <Route exact path="/">
        <Header/>
        <Cartsection />
      </Route>

      <Route path={"/signup"}>
        <SignUp />
      </Route>

      <Route path={"/signin"}>
        <SignIn />
      </Route>

      <Route path={"/employeeProfile"}>
           <EmployeeProfile/>
      </Route>
       
    </React.Fragment>
  );
}

export default App;
