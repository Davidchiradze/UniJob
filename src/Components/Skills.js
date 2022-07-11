import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";

export const Skills = (props) => {
  const Languages = props.Languages;
  const Skills = props.Skills;
  const defaultLanguages = Languages.find((item) => item.id === "ka");
  console.log(defaultLanguages);
  return (
    <React.Fragment>
      <Container style={{ width: "50%" }}>
        <Box>
          <h3>აირჩიეთ თქვენი უნარები</h3>
        </Box>
        <Box>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={props.SkillsList}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="უნარები"
                //placeholder="Skills"
              />
            )}
          />
        </Box>
        <Box>
          <h3>რა ენებს ფლობთ</h3>
        </Box>
        <Box>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={Languages}
            defaultValue={[defaultLanguages]}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="ენები"
                //placeholder="Languages"
              />
            )}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
};

const All_Skills = [
  { title: "JavaScript", id: 1 },
  { title: "React", id: 1 },
  { title: "C++", id: 1 },
  { title: "Python", id: 1 },
  { title: "Java", id: 1 },
  { title: "HTML", id: 1 },
  { title: "CSS", id: 1 },
  { title: "SQL", id: 1 },
];

export default Skills;
