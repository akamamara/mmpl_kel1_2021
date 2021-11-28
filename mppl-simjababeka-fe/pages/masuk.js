import { Box } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { ThemeProvider } from "@mui/system/node_modules/@mui/private-theming";

import NonLoginLayout from "@/layouts/NonLoginLayout";
import { Title } from "@/components/typography/Heading";
import InputText from "@/components/input/Input";
import Buttons from "@/components/input/Button";

import defaultTheme from "@/styles/global_mui";

function MasukPage() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Box sx={{ width: "100%", marginTop: 15 }}>
				<Card
					evelation={3}
					sx={{ marginLeft: "auto", marginRight: "auto", width: "50%" }}
				>
					<CardContent sx={{ padding: 6 }}>
						<Title>Masuk</Title>
						<InputText label="E-mail" fullWidth margin="normal" />
						<InputText
							label="Password"
							type="password"
							margin="normal"
							fullWidth
						/>
						<Buttons
							fullWidth
							text="Login"
							variant="contained"
							color="primary"
							sx={{ marginTop: 2, marginBottom: 4 }}
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
