import { Box } from "@mui/system";
import { ThemeProvider, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import CarouselItems from "@/components/display/CarouselItems";
import defaultTheme from "@/styles/global_mui";
import CarouselList from "@/utils/list/CarouselDummy";

function CarouselSection() {
	return (
		<Box mb={8}>
			<ThemeProvider theme={defaultTheme}>
				<Carousel animation="slide">
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
			</ThemeProvider>
		</Box>
	);
}

export default CarouselSection;
