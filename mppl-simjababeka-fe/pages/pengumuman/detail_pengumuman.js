import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import NonLoginLayout from "@/layouts/NonLoginLayout";
import { Heading2 } from "@/components/typography/Heading";
import { Body1 } from "@/components/typography/Body";
import defaultTheme from "@/styles/global_mui";

import { Box, Container } from "@mui/material";
import { getPengumumanById } from "@/utils/api/pengumuman";
import CarouselItems from "@/components/display/CarouselItems";
import { convertDate } from ".";

function DetailPengumumanaPage() {
	const router = useRouter();
	const [data, setData] = useState({});

	useEffect(() => {
		getPengumumanById(router.query.id, setData);
	}, [router.query]);
	useEffect(() => {
		console.log("data", data);
	}, [data]);

	return (
		<>
			<CarouselItems
				title={data.judul_pengumuman ?? "Judul"}
				imageSrc={data.gambar_pengumuman}
			/>
			<Container sx={{ marginTop: 5 }}>
				<Box sx={{ width: "70%" }}>
					<Body1 paragraph>
						<b>{convertDate(data.tanggal_pengumuman) ?? ""}</b>
					</Body1>
					<Body1 paragraph>{data.isi_pengumuman ?? ""}</Body1>
				</Box>
			</Container>
		</>
	);
}

DetailPengumumanaPage.getLayout = (page) => {
	return <NonLoginLayout container={false}>{page}</NonLoginLayout>;
};

export default DetailPengumumanaPage;
