import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import defaultTheme from "@/styles/global_mui";

import NonLoginLayout from "@/layouts/NonLoginLayout";
import GaleriCarousel from "@/sections/galeri/GaleriCarousel";

import { Card, CardContent, CardImages } from "@/components/surfaces/Card";
import { Title } from "@/components/typography/Heading";
import { Body1 } from "@/components/typography/Body";
import GaleriList from "@/utils/list/GaleriList";

import { getGaleriRaw, getGaleriById } from "@/utils/api/galeri";

function GaleriPage() {
	const [carouselOpen, setCarouselOpen] = useState(false);
	const [carouselItems, setCarouselItems] = useState({});
	const [data, setData] = useState([]);

	useEffect(() => {
		getGaleriRaw(setData);
	}, []);
	useEffect(() => {
		console.log(carouselItems);
	}, [carouselItems]);
	useEffect(() => {
		console.log("data", data);
	}, [data]);

	const handlerCarouselOpen = (id) => {
		getGaleriById(id, setCarouselItems).then(() =>
			setCarouselOpen(!carouselOpen)
		);
	};

	return (
		<>
			{carouselOpen ? (
				<GaleriCarousel
					items={carouselItems}
					openHandler={handlerCarouselOpen}
				/>
			) : (
				<></>
			)}
			<Box mt={defaultTheme.spacing(7)}>
				<Title>Galeri</Title>
				<Grid container columnSpacing={4} rowSpacing={3}>
					{data
						.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0))
						.map((item) => (
							<Grid item xs={4} key={item.id}>
								<Card
									typeLink
									onClick={() => {
										handlerCarouselOpen(item.id);
									}}
								>
									<CardImages src={item.sampul_galeri} />
									<CardContent>
										<Body1>
											<b>{item.nama_galeri}</b>
										</Body1>
										<Body1 sx={{ marginTop: 1, opacity: 0.6 }}>
											{item.keterangan_galeri
												.split(" ")
												?.slice(0, 20)
												.join(" ")}
											{item.keterangan_galeri.split(" ").length > 20
												? "..."
												: ""}
										</Body1>
									</CardContent>
								</Card>
							</Grid>
						))}
				</Grid>
			</Box>
		</>
	);
}

GaleriPage.getLayout = (page) => {
	return <NonLoginLayout>{page}</NonLoginLayout>;
};
GaleriPage.getTitle = "Galeri";

export default GaleriPage;
