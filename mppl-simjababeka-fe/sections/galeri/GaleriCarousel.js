import { useState, useEffect } from "react";
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
import { getGaleriImageById } from "@/utils/api/galeri";
import checkObjectIsEmpty from "@/utils/helper/checkObjectIsEmpty";

function GaleriCarousel({ items, openHandler }) {
	const [dataImage, setDataImage] = useState([]);
	const [tempImage, setTempImage] = useState({});

	useEffect(() => {
		console.log("items", items);
		for (var i = 0; i < items.images.length; i++) {
			console.log(items.images[i]);
			getGaleriImageById(items.images[i], setTempImage);
		}
	}, [items]);

	useEffect(() => {
		let dataa = [];
		if (!checkObjectIsEmpty(tempImage)) {
			dataa.push(tempImage);
			setDataImage(dataa.concat(dataImage));
			console.log("tempImage", tempImage);
		} else {
			dataa.push({
				id: 999,
				gambar_galeri: items.sampul_galeri,
			});
			setDataImage(dataa.concat(dataImage));
			console.log("tempImage", tempImage);
		}
	}, [tempImage]);

	useEffect(() => {
		console.log("dataImage", dataImage);
		// setDataImage(
		// 	dataImage.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0))
		// );
	}, [dataImage]);

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
							{dataImage
								.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0))
								.map((item, index) => (
									<Box sx={{ height: "70vh" }} key={index}>
										<img
											src={item.gambar_galeri}
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
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<Heading2 color="common.white">{items.nama_galeri}</Heading2>
							<Body1
								sx={{
									marginTop: defaultTheme.spacing(2),
									opacity: 0.8,
									overflowY: "auto",
									maxHeight: "60vh",
								}}
								color="common.white"
							>
								{items.keterangan_galeri}
							</Body1>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default GaleriCarousel;
