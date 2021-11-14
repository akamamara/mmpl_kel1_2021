import { Container } from "@mui/material";

import Navbar from "@/sections/navigation/Navbar";
import Footer from "@/sections/navigation/Footer";

function NonLoginLayout({ children }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}

export default NonLoginLayout;
