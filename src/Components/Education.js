import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import Button from "@mui/material/Button";

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

const names = ["ბაკალავრი", "მაგისტრი", "დოქტორი"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Education = () => {
  const [value, setValue] = React.useState(null);
  const [value1, setValue1] = React.useState(null);

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
    <Box sx={{ justifyContent: "center", mt: 5 }}>
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
          label="პროგრამის დასახელება (სპეციალობა)"
          variant="outlined"
        />
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
        <FormControl sx={{ m: 1, width: "700px" }}>
          <InputLabel id="demo-multiple-name-label">ხარისხი</InputLabel>
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
          label="სასწავლებელი"
          variant="outlined"
        />
      </Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          gap: "185px",
          justifyContent: "center",
          flexDirection: "row",
          mr: 5,
          my: 5,
        }}
        noValidate
        autoComplete="off"
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="From"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="To"
            value={value1}
            onChange={(newValue1) => {
              setValue1(newValue1);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          flexDirection: "row",
          mr: 8,
          my: 5,
          width: "75%",
        }}
        noValidate
        autoComplete="off"
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="ახლანდელი სასწავლებელი"
        />
      </Box>
      <Box
        component="form"
        sx={{ display: "flex", justifyContent: "center", ml: 50, my: 3 }}
        noValidate
        autoComplete="off"
      >
        <Button variant="text">Clear</Button>
        <Button variant="contained">Add</Button>
      </Box>
    </Box>
  );
};

export default Education;
