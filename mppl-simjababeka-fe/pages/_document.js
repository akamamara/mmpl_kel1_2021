import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
	render() {
		return (
			<Html lang="id">
				<Head>
					<meta name="theme-color" content="#545BB6" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Kreon&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
					/>
					<link
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css"
						integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM="
						crossOrigin="anonymous"
					></link>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;
