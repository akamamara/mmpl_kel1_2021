import { Container, Grid, Box } from "@mui/material";
import { Typography, Link } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import defaultTheme from "@/styles/global_mui";

import { Heading4 } from "@/components/typography/Heading";
import ContactList from "@/utils/list/ContactList";
import NavbarList from "@/utils/list/NavbarList";
import OtherLink from "@/utils/list/OtherLink";

function Footer() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Box bgcolor="primary.main" pt={7} mt={15}>
				<Container>
					<Grid container spacing={2} xs={10}>
						<Grid item xs={4}>
							<Heading4 mb={2} color="common.white">
								SMK INDUSTRI JABABEKA
							</Heading4>
							{Object.keys(ContactList).map((item) => (
								<Box key={item} sx={{ display: "flex" }}>
									<Typography
										variant="body1"
										pr={1}
										sx={{ textTransform: "capitalize" }}
										color="common.white"
									>
										<b>{item}</b>
									</Typography>
									<Typography variant="body1" color="common.white">
										{ContactList[item]}
									</Typography>
								</Box>
							))}
						</Grid>
						<Grid item xs={8}>
							<Box sx={{ display: "flex" }}>
								<Box pr={9}>
									<Heading4 mb={2} color="common.white">
										Tautan Kami
									</Heading4>
									{NavbarList.map((item) => (
										<p key={item}>
											<Link
												color="common.white"
												underline="hover"
												variant="body2"
											>
												{item}
											</Link>
										</p>
									))}
								</Box>
								<Box pr={9}>
									<Heading4 mb={2} color="common.white">
										Tautan Lainnya
									</Heading4>
									{OtherLink.map((item) => (
										<p key={item}>
											<Link
												color="common.white"
												underline="hover"
												variant="body2"
												href={item.link}
											>
												{item.name}
											</Link>
										</p>
									))}
								</Box>
							</Box>
						</Grid>
						<Grid item xs={4}></Grid>
					</Grid>
				</Container>
				<Box py={2.5} mt={7} sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
					<Grid container justifyContent="center">
						<Typography variant="body1" color="common.white">
							All Right Reserved © 2021 Group of Computer Science IPB
						</Typography>
					</Grid>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default Footer;
