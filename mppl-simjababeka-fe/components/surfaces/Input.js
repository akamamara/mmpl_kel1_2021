import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Subtitle2 } from "../typography/Heading";

import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const style = {
  text: {
    fontFamily: "Kreon, Roboto, sans-serif",
    fontSize: "0.90rem",
    color: "#0B5733",
  },
};

function InputText({ ...rest }) {
  return (
    <Box component="div">
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        inputProps={{
          style: style.text,
        }}
        InputLabelProps={{
          style: style.text,
        }}
        {...rest}
      />
    </Box>
  );
}

function BasicSelect({ value, action, label, data }) {
  return (
    <Box sx={{ minWidth: 120, width: "50%", mb: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">
          <Subtitle2>{label}</Subtitle2>
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={action}
        >
          {data.map((item, index) => (
            <MenuItem key={index} value={item}>
              <Subtitle2>{item}</Subtitle2>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function CheckboxSelect({ data, handleValue }) {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={data}
      disableCloseOnSelect
      onChange={handleValue}
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      // style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          inputProps={{
            style: style.text,
          }}
          InputLabelProps={{
            style: style.text,
          }}
          {...params}
        />
      )}
    />
  );
}

export default InputText;
export { BasicSelect, CheckboxSelect };
