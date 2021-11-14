import { Container, Grid, Box } from "@mui/material";

import NonLoginLayout from "@/layouts/NonLoginLayout";
import CarouselItems from "@/components/display/CarouselItems";
import { Heading3, Title } from "@/components/typography/Heading";
import Links from "@/components/navigation/Link";
import InformasiList from "@/utils/list/InformasiList";

import defaultTheme from "@/styles/global_mui";
import Body1 from "@/components/typography/Body";

function HomepageLayouts() {
	return (
		<div>
			<CarouselItems
				title="Informasi"
				imageSrc="http://foto2.data.kemdikbud.go.id/getImage/20246387/3.jpg"
			/>
			<Container>
				<Grid
					container
					columnSpacing={8}
					direction="row"
					sx={{ position: "relative", marginTop: defaultTheme.spacing(8) }}
				>
					<Grid item sx={{ position: "sticky", top: 110, height: "100%" }}>
						<Heading3 sx={{ textAlign: "right" }}>Daftar Isi</Heading3>
						<Box sx={{ textAlign: "right" }}>
							{InformasiList.map((item) => (
								<Links key={item.name} href={"#" + item.name.toLowerCase()}>
									{item.name}
								</Links>
							))}
						</Box>
					</Grid>
					<Grid item sx={{ width: "82%" }}>
						{InformasiList.map((item) => (
							<Box
								id={item.name.toLowerCase()}
								key={item.name}
								sx={{ marginBottom: defaultTheme.spacing(3) }}
							>
								<Title smallMargin>{item.name}</Title>
								<Body1>{item.description}</Body1>
							</Box>
						))}
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

HomepageLayouts.getLayout = (page) => {
	return <NonLoginLayout container={false}>{page}</NonLoginLayout>;
};

export default HomepageLayouts;
