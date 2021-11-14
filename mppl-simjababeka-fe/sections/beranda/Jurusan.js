import { Box, Grid } from "@mui/material";

import { Title } from "@/components/typography/Heading";
import { Card, CardImages, CardContent } from "@/components/surfaces/Card";
import { Body1 } from "@/components/typography/Body";
import JurusanList from "@/utils/list/JurusanList";
import defaultTheme from "@/styles/global_mui";

function JurusanSection() {
	return (
		<Box mb={defaultTheme.spacing(19)}>
			<Title>Jurusan</Title>
			<Grid container spacing={4}>
				{JurusanList.map((item) => (
					<Grid item xs={4} key={item.nama}>
						<Card horizontal>
							<CardImages horizontal src={item.imgSrc} />
							<CardContent horizontal>
								<Body1>{item.nama}</Body1>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default JurusanSection;
