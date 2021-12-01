import { Grid, Box, ThemeProvider } from "@mui/material";

import { Card, CardImages, CardContent } from "@/components/surfaces/Card";
import { Heading2 } from "@/components/typography/Heading";
import Buttons from "@/components/input/Button";
import defaultTheme from "@/styles/global_mui";
import Body1 from "@/components/typography/Body";

function Pengumuman_Berita({ dataBerita, dataPengumuman }) {
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
							<Heading2>Pengumuman</Heading2>
						</Grid>
						<Grid item>
							<Buttons
								variant="contained"
								color="secondary"
								text="Selengkapnya"
								href="pengumuman"
							/>
						</Grid>
					</Box>
					<Grid
						container
						columnSpacing={defaultTheme.spacing(3.5)}
						rowSpacing={defaultTheme.spacing(2.5)}
					>
						{dataPengumuman.map((item) => (
							<Grid item xs={6} key={item.id}>
								<Card>
									<CardContent>
										<Body1 sx={{ marginBottom: 1 }}>
											<b>{item.judul_pengumuman}</b>
										</Body1>
										<Body1>
											{item.isi_pengumuman.split(" ").splice(0, 20).join(" ")}
											{}
											{item.isi_pengumuman.split(" ").length > 20 ? "..." : ""}
										</Body1>
									</CardContent>
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
								href="/berita"
							/>
						</Grid>
					</Box>
					<Grid
						container
						columnSpacing={defaultTheme.spacing(3.5)}
						rowSpacing={defaultTheme.spacing(2.5)}
					>
						{dataBerita.map((item) => (
							<Grid item xs={6} key={item.id}>
								<Card>
									<CardImages src={item.gambar_berita} />
									<CardContent>
										<Body1 sx={{ marginBottom: 1 }}>
											<b>{item.judul_berita}</b>
										</Body1>
										<Body1>{item.isi_berita}</Body1>
									</CardContent>
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
