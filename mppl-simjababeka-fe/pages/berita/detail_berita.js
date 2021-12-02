import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import NonLoginLayout from "@/layouts/NonLoginLayout";
import { Heading2 } from "@/components/typography/Heading";
import { Body1 } from "@/components/typography/Body";
import defaultTheme from "@/styles/global_mui";

import { Box, Container } from "@mui/material";
import { getBeritaById } from "@/utils/api/berita";
import CarouselItems from "@/components/display/CarouselItems";
import { convertDate } from "pages/pengumuman";

function DetailBeritaPage() {
	const router = useRouter();
	const [data, setData] = useState({});

	useEffect(() => {
		getBeritaById(router.query.id, setData);
	}, [router.query]);
	useEffect(() => {
		console.log("data", data);
	}, [data]);

	return (
		<>
			<CarouselItems
				title={data.judul_berita ?? "Judul"}
				imageSrc={data.gambar_berita}
			/>
			<Container sx={{ marginTop: 5 }}>
				<Box sx={{ width: "70%" }}>
					<Body1 paragraph>
						<b>{convertDate(data.tanggal_berita) ?? ""}</b>
					</Body1>
					<Body1 paragraph>{data.isi_berita ?? ""}</Body1>
				</Box>
			</Container>
		</>
	);
}

DetailBeritaPage.getLayout = (page) => {
	return <NonLoginLayout container={false}>{page}</NonLoginLayout>;
};

export default DetailBeritaPage;
