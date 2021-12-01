import { Box, Card } from "@mui/material";
import Body1 from "@/components/typography/Body";

function LoadingSection() {
	return (
		<Box
			sx={{
				position: "absolute",
				width: "100%",
				height: "100%",
				top: 0,
				left: 0,
				background: "rgba(0, 0, 0, 0.65)",

				display: "flex",
				justifyContent: "center",
				alignItems: "center",

				zIndex: 999,
			}}
		>
			<Card
				raised
				sx={{
					marginLeft: "auto",
					marginRight: "auto",
					width: 200,
					height: "auto",
					padding: 3,

					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img
					src="/img/loading.svg"
					alt="Loading Screen"
					style={{ width: 80 }}
				/>
				<Body1 sx={{ marginTop: 1 }}>Tunggu Sebentar</Body1>
			</Card>
		</Box>
	);
}

export default LoadingSection;
