import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import defaultTheme from "@/styles/global_mui";

function Card({ children }) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Box
				sx={{
					backgroundColor: "primary.light",
					borderRadius: defaultTheme.spacing(2),
				}}
			>
				{children}
			</Box>
		</ThemeProvider>
	);
}

function CardImages({ src, horizontal = false }) {
	return (
		<Box
			sx={{
				height: defaultTheme.spacing(15.5),
				width: horizontal ? defaultTheme.spacing(15.5) : undefined,
				backgroundColor: src ? "" : "common.black",
				borderRadius: `${defaultTheme.spacing(2)} ${defaultTheme.spacing(
					2
				)} 0px 0px`,
			}}
			style={{ backgroundImage: src ? `url(${src})` : "" }}
		/>
	);
}

function CardContent({ children }) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Box px={2} pb={2.5} pt={3}>
				{children}
			</Box>
		</ThemeProvider>
	);
}

export default Card;
export { Card, CardImages, CardContent };
