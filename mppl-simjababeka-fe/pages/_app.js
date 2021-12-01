import "../styles/globals.css";
import Head from "next/head";

import { Provider } from "react-redux";
import store from "@/utils/redux/store";

import LoadingSection from "@/sections/LoadingSection";

const Noop = ({ children }) => children;

function MyApp({ Component, pageProps }) {
	// Use the layout defined at the page level, if available
	const getTitle = Component.getTitle ? Component.getTitle : "";
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<Provider store={store}>
			<Head>
				<title>{getTitle ? getTitle + " |" : ""} SMK Industri Jababeka</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			</Head>
			{getLayout(<Component {...pageProps} />)}
		</Provider>
	);
}

export default MyApp;
