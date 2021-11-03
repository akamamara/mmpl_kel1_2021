import * as React from "react";
import { AppBar, Container, Grid } from "@mui/material";
import { Button } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import defaultTheme from "@/styles/global_mui";

import { Heading3 } from "@/components/typography/Heading";
import NavbarList from "@/utils/list/NavbarList";

const theme = createTheme(defaultTheme, {
	appbar: {
		color: {
			primary: "#D6544B",
		},
	},
});

function ElevationScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

function Navbar() {
	return (
		<ThemeProvider theme={theme}>
			<ElevationScroll>
				<AppBar position="sticky" color="primary">
					<Container sx={{ padding: "1.25rem 0 1.25rem 0" }}>
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Grid item>
								<Heading3 component="h1">SMK INDUSTRI JABABEKA</Heading3>
							</Grid>
							<Grid item>
								{NavbarList.map((item, index) => {
									if (index == NavbarList.length - 1)
										return (
											<Button
												variant="contained"
												color="secondary"
												key={index}
												disableElevation
											>
												{item}
											</Button>
										);
									return (
										<Button
											variant="text"
											color="inherit"
											key={index}
											sx={{ marginRight: 1 }}
										>
											{item}
										</Button>
									);
								})}
							</Grid>
						</Grid>
					</Container>
				</AppBar>
			</ElevationScroll>
		</ThemeProvider>
	);
}
export default Navbar;
