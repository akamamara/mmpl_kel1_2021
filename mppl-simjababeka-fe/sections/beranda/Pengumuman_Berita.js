import { Grid, Box, ThemeProvider } from "@mui/material";

import { Card, CardImages, CardContent } from "@/components/surfaces/Card";
import { Heading2 } from "@/components/typography/Heading";
import Buttons from "@/components/Button";
import defaultTheme from "@/styles/global_mui";

function Pengumuman_Berita() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Grid container spacing={8}>
				<Grid item xs={6}>
					<Box
						mb={defaultTheme.spacing(4.5)}
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<Grid item>
							<Heading2>Pengumuman Akademik</Heading2>
						</Grid>
						<Grid item>
							<Buttons
								variant="contained"
								color="secondary"
								text="Selengkapnya"
							/>
						</Grid>
					</Box>
					<Grid
						container
						columnSpacing={defaultTheme.spacing(3.5)}
						rowSpacing={defaultTheme.spacing(2.5)}
					>
						{Array.from({ length: 6 }, (item) => (
							<Grid item xs={6}>
								<Card>
									<CardImages src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" />
									<CardContent>Hello world!</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Box
						mb={defaultTheme.spacing(4.5)}
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<Grid item>
							<Heading2>Berita Terkini</Heading2>
						</Grid>
						<Grid item>
							<Buttons
								variant="contained"
								color="secondary"
								text="Selengkapnya"
							/>
						</Grid>
					</Box>
					<Grid
						container
						columnSpacing={defaultTheme.spacing(3.5)}
						rowSpacing={defaultTheme.spacing(2.5)}
					>
						{Array.from({ length: 6 }, (item) => (
							<Grid item xs={6}>
								<Card>
									<CardImages src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" />
									<CardContent>Hello world!</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default Pengumuman_Berita;
