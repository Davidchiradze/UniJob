import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Cartsection from "./Components/Cartsection";
import SignUp from "./Components/Signup";
import SignIn from "./Components/Signin";
import EmployeeProfile from "./Components/EmployeeProfile";
import { Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const [texts, setTexts] = useState("");

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
        <SignIn />
      </Route>

      <Route path={"/employeeProfile"}>
        <EmployeeProfile />
      </Route>
    </React.Fragment>
  );
}

export default App;
