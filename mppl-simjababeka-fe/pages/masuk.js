import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Box } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { ThemeProvider } from "@mui/system/node_modules/@mui/private-theming";

import NonLoginLayout from "@/layouts/NonLoginLayout";
import FormLogin from "@/sections/login/FormLogin";
import { Title } from "@/components/typography/Heading";

import defaultTheme from "@/styles/global_mui";

import { userLogin } from "@/utils/api/user";
import { useSelector } from "react-redux";

function MasukPage() {
	const router = useRouter();
	const [result, setResult] = useState([]);

	const authState = useSelector((state) => state.user.authenticated);

	useEffect(() => {
		if (authState) router.push("/admin/");
	}, [authState]);

	const handleUserLogin = () => {
		userLogin(result);
	};
	const handleInput = (e) => {
		setResult({ ...result, [e.target.name]: e.target.value });
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Box sx={{ width: "100%", marginTop: 15 }}>
				<Card
					evelation={3}
					sx={{ marginLeft: "auto", marginRight: "auto", width: "50%" }}
				>
					<CardContent sx={{ padding: 6 }}>
						<Title>Masuk</Title>
						<FormLogin
							handleSubmit={handleUserLogin}
							handleInput={handleInput}
						/>
					</CardContent>
				</Card>
			</Box>
		</ThemeProvider>
	);
}

MasukPage.getLayout = (page) => {
	return <NonLoginLayout>{page}</NonLoginLayout>;
};

export default MasukPage;
