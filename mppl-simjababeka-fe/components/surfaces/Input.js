import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function InputText({ ...rest }) {
  return (
    <Box
      component="form"
      // sx={{
      //   "& > :not(style)": { mb: 1, width: "25ch" },
      // }}
      // noValidate
      // autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        sx={{ mb: 1 }}
        {...rest}
      />
    </Box>
  );
}

function BasicSelect({ value, action, label, data }) {
  return (
    <Box sx={{ minWidth: 120, width: "50%", mb: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={action}
        >
          {data.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default InputText;
export { BasicSelect };
