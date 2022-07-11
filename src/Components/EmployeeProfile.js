import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

const EmployeeProfile = () => {
  const [value, setValue] = React.useState(0);
  const [Languages, setLanguages] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchLanguages = async () => {
    const response = await fetch(
      `http://78.47.50.12/jofy/api/languages?key=sXuWClO2NvVYNGG9psuXHM924rOT7qIf`
    );
    const result = await response.json();
    setLanguages(result.list);
    console.log(result.list);
  };
  useEffect(() => {
    fetchLanguages();
  }, []);
  return (
    <React.Fragment>
      <div className="activecv-btn">
        <Link to={"/cvlist"}>Active CVs</Link>
      </div>
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
        {value === 3 && <Skills Languages={Languages} />}
      </Container>
    </React.Fragment>
  );
};

export default EmployeeProfile;
