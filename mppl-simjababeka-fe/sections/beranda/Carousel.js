import dynamic from "next/dynamic";
import * as React from "react";

import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material";
// import Carousel from "react-material-ui-carousel";

const Carousel = dynamic(() => import("react-material-ui-carousel"), {
	ssr: false,
});

import CarouselItems from "@/components/display/CarouselItems";
import defaultTheme from "@/styles/global_mui";
import CarouselList from "@/utils/list/CarouselDummy";

function CarouselSection({ data }) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Box mb={8}>
				<Carousel>
					{data.map((item, index) => (
						<CarouselItems
							key={index}
							imageSrc={item.imageSrc ?? undefined}
							title={item.title}
							description={item.description}
							action
							actionTitle={"Selengkapnya"}
							actionLink={item.actionLink}
						/>
					))}
				</Carousel>
			</Box>
		</ThemeProvider>
	);
}

export default CarouselSection;
