import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import defaultTheme from "@/styles/global_mui";

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
themeHeading.typography.subtitle1 = {
	fontFamily: "Kreon, Roboto, sans-serif",
	fontSize: "1.00rem",
	color: "#0B5733",
};
themeHeading.typography.subtitle2 = {
	fontFamily: "Kreon, Roboto, sans-serif",
	fontSize: "0.90rem",
	color: "#0B5733",
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

function Subtitle1({ children, ...rest }) {
	return (
		<ThemeProvider theme={themeHeading}>
			<Typography variant="subtitle1" {...rest}>
				{children}
			</Typography>
		</ThemeProvider>
	);
}
function Subtitle2({ children, ...rest }) {
	return (
		<ThemeProvider theme={themeHeading}>
			<Typography component="span" variant="subtitle2" {...rest}>
				{children}
			</Typography>
		</ThemeProvider>
	);
}

function Title({ children, ...rest }) {
	return (
		<>
			<Heading2 {...rest}>{children}</Heading2>
			<Box mt={2} mb={4} sx={{ width: defaultTheme.spacing(15) }}>
				<Grid container rowSpacing={1}>
					<Grid
						item
						xs={9}
						sx={{
							borderRadius: 999,
							height: defaultTheme.spacing(1),
							background: defaultTheme.palette.secondary.main,
						}}
					/>
					<Grid item xs={1} />
					<Grid
						item
						xs={2}
						sx={{
							borderRadius: 999,
							height: defaultTheme.spacing(1),
							background: defaultTheme.palette.secondary.main,
						}}
					/>
				</Grid>
			</Box>
		</>
	);
}

export default Heading1;
export { Heading1, Heading2, Heading3, Heading4, Subtitle1, Subtitle2, Title };
