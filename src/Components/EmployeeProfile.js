import React, { useState } from "react";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProfileDetails from "./ProfileDetails";
// import { NavLink, Route } from "react-router-dom";
import Skills from "./Skills";
import "./Employeeprofile.scss";
import Experience from "./Experience";
import Education from "./Education";

const EmployeeProfile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="cm">
      <Box sx={{ width: "100%", bgcolor: "background.paper" }} mt={2}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Profile Details" sx={{ p: 5 }} />
          <Tab label="Experience" sx={{ p: 5 }} />
          <Tab label="Education" sx={{ p: 5 }} />
          <Tab label="Skills" sx={{ p: 5 }} />
        </Tabs>
      </Box>
      {value === 0 && <ProfileDetails />}
      {value === 1 && <Experience />}
      {value === 2 && <Education />}
      {value === 3 && <Skills />}
    </Container>
  );
};

export default EmployeeProfile;
