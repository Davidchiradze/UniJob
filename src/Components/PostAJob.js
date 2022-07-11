import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import "./PostAJob.scss";
import { Link } from "react-router-dom";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["სრული განაკვეთი", "ნახევარი განაკვეთი"];

const category = [
  "Web Developer",
  "PHP Developer",
  "web Designer",
  "Graphic Designer",
];

const country = ["საქართველო", "ამერიკა", "გერმანია", "ინგლისი", "საფრანგეთი"];

const education = ["საშუალო", "ბაკალავრი", "მაგისტრი", "დოქტორი"];

const experience = ["1 წლიანი", "2 წლიანი", "3 წლიანი", "3+ წლიანი"];

const gender = ["მამრობითი", "მდედრობითი"];

const shift = ["დილის ცვლა", "საღამოს ცვლა"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const PostAJob = (props) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <React.Fragment>
      <div className="activejobs-btn">
        <Link to={"/jobslist"}>Active Job Offers</Link>
      </div>
      <Box sx={{ justifyContent: "center", mt: 5 }}>
        <div className="postajob-title">
          <h1>Post A Job</h1>
        </div>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            mr: 5,
            my: 0,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ width: "700px" }}
            hiddenLabel
            id="filled-hidden-label-normal"
            label="ვაკანსიის დასახელება"
            variant="outlined"
          />
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            gap: "36px",
            justifyContent: "center",
            flexDirection: "row",
            mr: 5,
            my: 1,
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl sx={{ m: 1, width: "325px" }}>
            <InputLabel id="demo-multiple-name-label">განაკვეთი</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: "325px" }}>
            <InputLabel id="demo-multiple-name-label">კატეგორია</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {category.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            gap: "50px",
            justifyContent: "center",
            flexDirection: "row",
            mr: 5,
            my: 0,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ width: "325px" }}
            hiddenLabel
            id="filled-hidden-label-normal"
            label="ქალაქი"
            variant="outlined"
          />
          <FormControl sx={{ width: "325px" }}>
            <InputLabel id="demo-multiple-name-label">ქვეყანა</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {country.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            gap: "50px",
            justifyContent: "center",
            flexDirection: "row",
            mr: 5,
            my: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ width: "325px" }}
            hiddenLabel
            id="filled-hidden-label-normal"
            label="მინიმალური ხელფასი"
            variant="outlined"
          />

          <TextField
            sx={{ width: "325px" }}
            hiddenLabel
            id="filled-hidden-label-normal"
            label="მაქსიმალური ხელფასი"
            variant="outlined"
          />
        </Box>

        <Box
          component="form"
          sx={{
            display: "flex",
            gap: "36px",
            justifyContent: "center",
            flexDirection: "row",
            mr: 5,
            my: 1,
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl sx={{ m: 1, width: "325px" }}>
            <InputLabel id="demo-multiple-name-label">
              განათლების დონე
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {education.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: "325px" }}>
            <InputLabel id="demo-multiple-name-label">
              სამუშაო გამოცდილება
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {experience.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            mr: 5,
            my: 0,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ width: "700px" }}
            hiddenLabel
            id="filled-hidden-label-normal"
            label="ვებგვერდი"
            variant="outlined"
          />
        </Box>

        <Box
          component="form"
          sx={{
            display: "flex",
            gap: "50px",
            justifyContent: "center",
            flexDirection: "row",
            mr: 5,
            my: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ width: "325px" }}
            hiddenLabel
            id="filled-hidden-label-normal"
            label="მეილი"
            variant="outlined"
          />
          <TextField
            sx={{ width: "325px" }}
            hiddenLabel
            id="filled-hidden-label-normal"
            label="ტელეფონის ნომერი"
            variant="outlined"
          />
        </Box>

        <Box
          component="form"
          sx={{
            display: "flex",
            gap: "36px",
            justifyContent: "center",
            flexDirection: "row",
            mr: 5,
            my: 1,
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl sx={{ m: 1, width: "325px" }}>
            <InputLabel id="demo-multiple-name-label">სქესი</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {gender.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: "325px" }}>
            <InputLabel id="demo-multiple-name-label">ცვლა</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {shift.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 2,
          }}
        >
          <TextareaAutosize
            aria-label="text area"
            placeholder="ვაკანსიის დახასიათება..."
            style={{
              width: 720,
              minWidth: 200,
              minHeight: 100,
              padding: "5px",
            }}
          />
        </Box>

        <Box
          component="form"
          sx={{ display: "flex", justifyContent: "center", ml: 50, my: 3 }}
          noValidate
          autoComplete="off"
        >
          <Button variant="text">Clear</Button>
          <Button variant="contained">Post</Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

PostAJob.propTypes = {};

export default PostAJob;
