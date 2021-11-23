import { Box } from "@mui/material";
import {
	TextField,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	Checkbox,
	Autocomplete,
} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { Subtitle2 } from "@/components/typography/Heading";
import defaultTheme from "@/styles/global_mui";

const style = {
	text: {
		fontFamily: "Kreon, Roboto, sans-serif",
		fontSize: "0.90rem",
		color: "#0B5733",
	},
};

function InputText({ ...rest }) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Box component="div">
				<TextField
					id="outlined-basic"
					variant="outlined"
					size="small"
					// inputProps={{
					//   style: style.text,
					// }}
					// InputLabelProps={{
					//   style: style.text,
					// }}
					{...rest}
				/>
			</Box>
		</ThemeProvider>
	);
}

function BasicSelect({ value, action, label, data }) {
	return (
		<ThemeProvider theme={defaultTheme}>
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
		</ThemeProvider>
	);
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function CheckboxSelect({ data, handleValue }) {
	return (
		<ThemeProvider theme={defaultTheme}>
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
		</ThemeProvider>
	);
}

export default InputText;
export { InputText, BasicSelect, CheckboxSelect };
