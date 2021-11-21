import { useState } from "react";
import { Box, Grid } from "@mui/material";

import defaultTheme from "@/styles/global_mui";

import NonLoginLayout from "@/layouts/NonLoginLayout";
import GaleriCarousel from "@/sections/galeri/GaleriCarousel";

import { Card, CardContent, CardImages } from "@/components/surfaces/Card";
import { Title } from "@/components/typography/Heading";
import { Body1 } from "@/components/typography/Body";
import GaleriList from "@/utils/list/GaleriList";

function GaleriPage() {
	const [carouselOpen, setCarouselOpen] = useState(false);
	const [carouselItems, setCarouselItems] = useState({});

	const handlerCarouselOpen = () => {
		setCarouselOpen(!carouselOpen);
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
					{Array.from({ length: 6 }, (_) => (
						<Grid item xs={4}>
							<Card
								typeLink
								onClick={() => {
									handlerCarouselOpen();
									setCarouselItems(GaleriList);
								}}
							>
								<CardImages src={GaleriList.img[0]} />
								<CardContent>
									<Body1>{GaleriList.title}</Body1>
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

export default GaleriPage;
