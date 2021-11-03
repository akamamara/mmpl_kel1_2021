import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeHeading = createTheme();

themeHeading.typography.h1 = {
	fontFamily: "Kreon, Roboto, sans-serif",
	fontSize: "4.25rem",
};
themeHeading.typography.h2 = {
	fontFamily: "Kreon, Roboto, sans-serif",
	fontSize: "2.25rem",
};
themeHeading.typography.h3 = {
	fontFamily: "Kreon, Roboto, sans-serif",
	fontSize: "1.75rem",
};
themeHeading.typography.h4 = {
	fontFamily: "Kreon, Roboto, sans-serif",
	fontSize: "1.25rem",
};

function Heading1({ children, ...rest }) {
	return (
		<ThemeProvider theme={themeHeading}>
			<Typography variant="h1" {...rest}>
				{children}
			</Typography>
		</ThemeProvider>
	);
}

function Heading2({ children, ...rest }) {
	return (
		<ThemeProvider theme={themeHeading}>
			<Typography variant="h2" {...rest}>
				{children}
			</Typography>
		</ThemeProvider>
	);
}

function Heading3({ children, ...rest }) {
	return (
		<ThemeProvider theme={themeHeading}>
			<Typography variant="h3" {...rest}>
				{children}
			</Typography>
		</ThemeProvider>
	);
}

function Heading4({ children, ...rest }) {
	return (
		<ThemeProvider theme={themeHeading}>
			<Typography variant="h4" {...rest}>
				{children}
			</Typography>
		</ThemeProvider>
	);
}

export default Heading1;
export { Heading1, Heading2, Heading3, Heading4 };
