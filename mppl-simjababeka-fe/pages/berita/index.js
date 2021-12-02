import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Link from "next/link";

import NonLoginLayout from "@/layouts/NonLoginLayout";
import { CardContent, CardImages, Card } from "@/components/surfaces/Card";
import { Title } from "@/components/typography/Heading";
import Body1 from "@/components/typography/Body";

import { getBerita } from "@/utils/api/berita";
import { convertDate } from "pages/pengumuman";

function BeritaPage() {
	const [data, setData] = useState([]);

	useEffect(() => {
		getBerita(setData);
	}, []);
	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<Box mt={7}>
			<Title>Berita</Title>
			<Grid container spacing={3}>
				{data
					.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0))
					.map((item, index) => (
						<Grid item xs={3} key={index}>
							<Link
								passHref
								href={{
									pathname: `/berita/detail_berita`,
									query: { id: item.id },
								}}
							>
								<Card typeLink>
									<CardImages src={item.gambar_berita} />
									<CardContent>
										<Body1>
											<b>{item.judul_berita}</b>
										</Body1>
										<Body1 sx={{ marginTop: 1, opacity: 0.6 }}>
											{convertDate(item.tanggal_berita)}
											<br />
											<br />
											{item.isi_berita?.split(" ").splice(0, 20).join(" ")}
											{item.isi_berita?.split(" ").splice(0, 20).length > 20
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

BeritaPage.getLayout = (page) => {
	return <NonLoginLayout>{page}</NonLoginLayout>;
};

export default BeritaPage;
