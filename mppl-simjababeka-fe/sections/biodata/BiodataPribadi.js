import * as React from "react";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import { Subtitle2 } from "@/components/typography/Heading";
import CapitalizeEachWord from "@/utils/helper/CapitalizeEachWord";
import { ProfilGuruLabel, ProfilSiswaLabel } from "@/utils/list/BiodataList";

import { Body1 } from "@/components/typography/Body";
import MatpelList from "@/utils/list/MatpelList";
import { getMataPelajaran } from "@/utils/api/mapel";

const Item = styled(Typography)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(0),
	textAlign: "left",
	color: theme.palette.text.primary,
}));

export default function BiodataPribadi({ role, showData }) {
	const [dataMatpel, setDataMatpel] = React.useState([]);

	React.useEffect(() => {
		if (role === "guru") getMataPelajaran(setDataMatpel);
	}, [showData]);

	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
					alignItems="flex-end"
				>
					{(role === "guru" ? ProfilGuruLabel : ProfilSiswaLabel).map((it) => (
						<Grid item xs={4} sm={8} md={6} key={it}>
							<Item>
								<Subtitle2>
									<b>{it.label}</b>
								</Subtitle2>
							</Item>
							<Item>
								{it.label !== "Foto" ? (
									<Body1 sx={{ opacity: 0.7 }}>
										{showData[it.name] === null
											? "Data belum diisi"
											: it.label === "Mata Pelajaran"
											? dataMatpel.filter(
													(item) => item.id === showData["mapel_id"]
											  )[0]?.nama_mapel
											: showData[it.name]}
									</Body1>
								) : !!showData[it.name] ? (
									<img
										src={showData[it.name]}
										style={{
											width: 160,
											height: 160,
											objectFit: "cover",
											borderRadius: 999,
										}}
										alt={it.label}
									/>
								) : (
									"Data belum diisi"
								)}
							</Item>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
}
