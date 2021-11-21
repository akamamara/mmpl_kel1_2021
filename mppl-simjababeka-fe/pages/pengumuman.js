import { Box, Grid } from "@mui/material";

import NonLoginLayout from "@/layouts/NonLoginLayout";
import { CardContent, CardImages, Card } from "@/components/surfaces/Card";
import { Title } from "@/components/typography/Heading";
import Body1 from "@/components/typography/Body";

function PengumumanPage() {
	return (
		<Box mt={7}>
			<Title>Berita</Title>
			<Grid container spacing={3}>
				{Array.from({ length: 16 }, (_) => (
					<Grid item xs={3}>
						<Card>
							<CardImages />
							<CardContent>
								<Body1>
									<b>Judul</b>
								</Body1>
								<Body1 sx={{ marginTop: 1, opacity: 0.6 }}>
									Lorem ipsum dolor sit amet, consectetur , mmolestie eleifend
									vitae ac enim. Integer vel pulvinar mauris, nec porttitor
									justo.das...
								</Body1>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

PengumumanPage.getLayout = (page) => {
	return <NonLoginLayout>{page}</NonLoginLayout>;
};

export default PengumumanPage;
