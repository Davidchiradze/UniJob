
import './App.css';
import React from 'react';
import Header from './Components/Header'
import Cartsection from './Components/Cartsection';
import SignUp from './Components/Signup';
import SignIn from './Components/Signin';
import EmployeeProfile from './Components/EmployeeProfile';

function App() {
  return (
   <React.Fragment>
     {/* <Header/>
     <Cartsection/> */}

     {/* <SignUp/>
         <SignIn/> */}
         <EmployeeProfile/>
   </React.Fragment>
  );
}

export default App;
