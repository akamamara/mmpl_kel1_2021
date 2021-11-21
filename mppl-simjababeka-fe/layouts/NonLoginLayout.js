import { Container } from "@mui/material";

import Navbar from "@/sections/navigation/Navbar";
import Footer from "@/sections/navigation/Footer";

function NonLoginLayout({ children, container = true }) {
	return (
		<>
			<Navbar />
			{container ? <Container>{children}</Container> : children}
			<Footer />
		</>
	);
}

export default NonLoginLayout;
