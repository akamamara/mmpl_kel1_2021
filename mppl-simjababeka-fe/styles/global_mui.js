import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
	palette: {
		primary: {
			main: "#D6544B",
			light: "#EA8983",
			contrastText: "#fff",
		},
		secondary: {
			main: "#D8B47F",
			contrastText: "#323232",
		},
		text: {
			primary: "#323232",
		},
	},
});

export default defaultTheme;
