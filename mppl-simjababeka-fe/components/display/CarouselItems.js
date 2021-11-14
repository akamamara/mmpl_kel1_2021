import { Box, Container } from "@mui/material";

import Buttons from "@/components/Button";
import { Heading1 } from "@/components/typography/Heading";
import { Body1 } from "@/components/typography/Body";
import defaultTheme from "@/styles/global_mui";

function CarouselItems({
	imageSrc,
	title,
	description,
	action = false,
	actionLink,
	actionTitle,
}) {
	return (
		<Box
			sx={{
				position: "relative",
				display: "flex",
				alignItems: "flex-end",
				backgroundImage: `url(${imageSrc})`,
				backgroundSize: "cover",
				height: defaultTheme.spacing(64.875),
			}}
		>
			<Box
				sx={{
					position: "absolute",
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					background:
						"linear-gradient(180deg, rgba(50, 50, 50, 0) 34.9%, #323232 100%)",
					zIndex: 0,
				}}
			/>
			<Container sx={{ paddingBottom: defaultTheme.spacing(10), zIndex: 10 }}>
				<Heading1
					color="common.white"
					sx={{ marginBottom: defaultTheme.spacing(1.5) }}
				>
					{title}
				</Heading1>
				<Body1
					sx={{
						width: defaultTheme.spacing(54),
					}}
					color="common.white"
				>
					{description}
				</Body1>
				{action ? (
					<Buttons
						variant="contained"
						color="secondary"
						text={actionTitle}
						href={actionLink}
						sx={{ marginTop: defaultTheme.spacing(3.5) }}
					/>
				) : null}
			</Container>
		</Box>
	);
}

export default CarouselItems;
