import { useState, useEffect } from "react";
import { Container } from "@mui/material";

import NonLoginLayout from "@/layouts/NonLoginLayout";
import CarouselSection from "@/sections/beranda/Carousel";
import JurusanSection from "@/sections/beranda/Jurusan";
import Pengumuman_Berita from "@/sections/beranda/Pengumuman_Berita";

import { getBerita, getBeritaID } from "@/utils/api/berita";
import { getPengumuman, getPengumumanID } from "@/utils/api/pengumuman";

function HomepageLayouts() {
	const [dataBerita, setDataBerita] = useState([]);
	const [dataPengumuman, setDataPengumuman] = useState([]);
	const [data, setData] = useState([]);
	const [dataFix, setDataFix] = useState([]);

	const [idBerita, setIdBerita] = useState([]);
	const [idPengumuman, setIdPengumuman] = useState([]);
	const [temp, setTemp] = useState([]);

	const [loadingState, setLoadingState] = useState(false);

	useEffect(() => {
		getBerita(setDataBerita);
		getPengumuman(setDataPengumuman);
	}, []);

	useEffect(() => {
		let dataa = dataBerita.concat(dataPengumuman);
		setData(
			dataa.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0)).slice(0, 4)
		);
	}, [dataBerita, dataPengumuman]);

	useEffect(() => {
		let tempt = [];
		data.map((item) =>
			tempt.push({
				title: item.judul_pengumuman || item.judul_berita,
				description: item.isi_pengumuman || item.isi_berita,
				imageSrc: item.gambar_berita,
				actionLink: item.judul_pengumuman
					? `/pengumuman/detail_pengumuman?id=${item.id}`
					: item.judul_berita
					? `/berita/detail_berita?id=${item.id}`
					: "#",
			})
		);
		console.log(tempt);
		setDataFix(tempt);
	}, [data]);

	return (
		<>
			<CarouselSection data={dataFix} />
			<Container>
				<JurusanSection />
				<Pengumuman_Berita
					dataBerita={dataBerita.sort((a, b) =>
						a.id < b.id ? 1 : b.id < a.id ? -1 : 0
					)}
					dataPengumuman={dataPengumuman.sort((a, b) =>
						a.id < b.id ? 1 : b.id < a.id ? -1 : 0
					)}
				/>
			</Container>
		</>
	);
}

HomepageLayouts.getLayout = (page) => {
	return <NonLoginLayout container={false}>{page}</NonLoginLayout>;
};

export default HomepageLayouts;
