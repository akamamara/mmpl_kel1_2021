import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Link from "next/link";

import NonLoginLayout from "@/layouts/NonLoginLayout";
import { CardContent, CardImages, Card } from "@/components/surfaces/Card";
import { Title } from "@/components/typography/Heading";
import Body1 from "@/components/typography/Body";

import { getPengumuman } from "@/utils/api/pengumuman";

export function convertDate(dateNew) {
	var date = new Date(dateNew);
	return (
		date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
	);
}

function PengumumanPage() {
	const [data, setData] = useState([]);
	useEffect(() => {
		getPengumuman(setData);
	}, []);
	useEffect(() => {
		console.log("data", data);
	}, [data]);
	return (
		<Box mt={7}>
			<Title>Pengumuman</Title>
			<Grid container spacing={3}>
				{data
					.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0))
					.map((item) => (
						<Grid item xs={3} key={item.id}>
							<Link
								passHref
								href={{
									pathname: `/pengumuman/detail_pengumuman`,
									query: { id: item.id },
								}}
							>
								<Card typeLink>
									<CardContent>
										<Body1>
											<b>{item.judul_pengumuman}</b>
										</Body1>
										<Body1 sx={{ marginTop: 1, opacity: 0.6 }}>
											{convertDate(item.tanggal_pengumuman)}
											<br />
											<br />
											{item.isi_pengumuman.split(" ").splice(0, 20).join(" ")}
											{item.isi_pengumuman.split(" ").splice(0, 20).length > 20
												? "..."
												: ""}
										</Body1>
									</CardContent>
								</Card>
							</Link>
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
