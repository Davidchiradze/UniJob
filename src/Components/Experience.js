import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
    width: 320px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? "" : grey[100]};
      border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:focus {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[100]
      };
    }
  `
);

const StyledTextareaElement = styled("textarea")(
  ({ theme }) => `
    width: 550px;
    height: 100px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? "" : grey[100]};
      border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:focus {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[100]
      };
    }
  `
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{
        Input: StyledInputElement,
        Textarea: StyledTextareaElement,
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function Experience() {
  const [value, setValue] = React.useState(null);
  const [value1, setValue1] = React.useState(null);

  return (
    <Box sx={{ justifyContent: "center", mt: 5 }}>
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
          sx={{ width: "260px" }}
          hiddenLabel
          id="filled-hidden-label-normal"
          label="პოზიციის დასახელება"
          variant="outlined"
        />
        <TextField
          sx={{ width: "260px" }}
          hiddenLabel
          id="filled-hidden-label-normal"
          label="კომპანიის დასახელება"
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
        sx={{ display: "flex", justifyContent: "center", mr: 50, my: 3 }}
        noValidate
        autoComplete="off"
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="ახლანდელი სამუშაო"
        />
      </Box>
      <Box
        component="form"
        sx={{ display: "flex", justifyContent: "center", mr: 5, my: 3 }}
        noValidate
        autoComplete="off"
      >
        <CustomInput
          aria-label="Demo input"
          multiline
          placeholder="ჩემს შესახებ..."
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
}
