import { Container } from "@mui/material";

import Navbar from "@/sections/navigation/Navbar";
import Footer from "@/sections/navigation/Footer";

import LoadingSection from "@/sections/LoadingSection";
import { useSelector } from "react-redux";

function NonLoginLayout({ children, container = true }) {
	const loadingState = useSelector((state) => state.loading);

	return (
		<>
			{loadingState ? <LoadingSection /> : null}
			<Navbar />
			{container ? <Container>{children}</Container> : children}
			<Footer />
		</>
	);
}

export default NonLoginLayout;
