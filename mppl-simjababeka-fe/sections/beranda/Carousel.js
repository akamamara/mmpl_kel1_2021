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

function CarouselSection() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Box mb={8}>
				<Carousel>
					{CarouselList.map((item, index) => (
						<CarouselItems
							key={index}
							imageSrc={item.imageSrc}
							title={item.title}
							description={item.description}
							action={item.actionTitle.length ? true : false}
							actionTitle={item.actionTitle}
							actionLink={item.actionLink}
						/>
					))}
				</Carousel>
			</Box>
		</ThemeProvider>
	);
}

export default CarouselSection;
