import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeBody = createTheme();

themeBody.typography.body1 = {
	fontFamily: "Roboto, sans-serif",
	fontStyle: "normal",
	fontWeight: "normal",
	fontSize: "0.9375rem",
	lineHeight: "120%",
};

function Body1({ children, ...rest }) {
	return (
		<ThemeProvider theme={themeBody}>
			<Typography variant="body1" {...rest}>
				{children}
			</Typography>
		</ThemeProvider>
	);
}

export default Body1;
export { Body1 };
