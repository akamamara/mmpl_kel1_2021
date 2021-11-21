import dynamic from "next/dynamic";
import { Box, Container, Grid } from "@mui/material";
import { Icon } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const Carousel = dynamic(() => import("react-material-ui-carousel"), {
	ssr: false,
});

import { Body1 } from "@/components/typography/Body";
import { Heading2 } from "@/components/typography/Heading";
import defaultTheme from "@/styles/global_mui";

function GaleriCarousel({ items, openHandler }) {
	return (
		<Box
			sx={{
				position: "fixed",
				top: 0,
				left: 0,

				height: "100%",
				width: "100%",

				background: "rgba(0, 0, 0, 0.65)",
				zIndex: 999,
			}}
		>
			<Box
				sx={{ position: "absolute", right: "5%", top: "5%", cursor: "pointer" }}
				onClick={() => openHandler()}
			>
				<Icon fontSize="large" sx={{ color: "#FFF", fontSize: 120 }}>
					close
				</Icon>
			</Box>
			<Container
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
				}}
			>
				<Grid
					container
					justifyContent="center"
					alignItems="center"
					columns={20}
					columnSpacing={4}
				>
					<Grid item xs={13}>
						<Carousel>
							{items.img.map((item, index) => (
								<Box sx={{ height: "70vh" }} key={index}>
									<img
										src={item}
										loading="lazy"
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
											borderRadius: defaultTheme.spacing(2),
										}}
									/>
								</Box>
							))}
						</Carousel>
					</Grid>
					<Grid item xs={7}>
						<Heading2 color="common.white">{items.title}</Heading2>
						<Body1
							sx={{ marginTop: defaultTheme.spacing(2) }}
							color="common.white"
						>
							{items.description}
						</Body1>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default GaleriCarousel;
