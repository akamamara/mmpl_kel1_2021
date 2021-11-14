import { Container } from "@mui/material";

import NonLoginLayout from "@/layouts/NonLoginLayout";
import CarouselSection from "@/sections/beranda/Carousel";
import JurusanSection from "@/sections/beranda/Jurusan";
import Pengumuman_Berita from "@/sections/beranda/Pengumuman_Berita";

function HomepageLayouts() {
	return (
		<>
			<CarouselSection />
			<Container>
				<JurusanSection />
				<Pengumuman_Berita />
			</Container>
		</>
	);
}

HomepageLayouts.getLayout = (page) => {
	return <NonLoginLayout>{page}</NonLoginLayout>;
};

export default HomepageLayouts;
