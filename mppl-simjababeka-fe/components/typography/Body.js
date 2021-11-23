import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeBody = createTheme();

themeBody.typography.body1 = {
	fontFamily: "Roboto, sans-serif",
	fontStyle: "normal",
	fontWeight: "normal",
	fontSize: "0.9375rem",
	lineHeight: "125%",
};

function Body1({ children, paragraph = false, sx, ...rest }) {
	const paragraphCombined = {
		marginTop: 1,
		textAlign: "justify",
		opacity: 0.75,
	};

	const sxCombined = {
		...sx,
		...paragraphCombined,
	};

	return (
		<ThemeProvider theme={themeBody}>
			<Typography variant="body1" sx={paragraph ? sxCombined : sx} {...rest}>
				{children}
			</Typography>
		</ThemeProvider>
	);
}

export default Body1;
export { Body1 };
