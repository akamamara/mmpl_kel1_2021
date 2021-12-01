import * as React from "react";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import { Subtitle2 } from "@/components/typography/Heading";
import CapitalizeEachWord from "@/utils/helper/CapitalizeEachWord";
import { ProfilGuruLabel } from "@/utils/list/BiodataList";

import { Body1 } from "@/components/typography/Body";

const Item = styled(Typography)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(0),
	textAlign: "left",
	color: theme.palette.text.primary,
}));

export default function BiodataPribadi({ showData }) {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{ProfilGuruLabel.map((it) => (
						<Grid item xs={4} sm={8} md={6} key={it}>
							<Item>
								<Subtitle2>
									<b>{it.label}</b>
								</Subtitle2>
							</Item>
							<Item>
								<Body1 sx={{ opacity: 0.7 }}>
									{showData[it.name] === null
										? "Data belum diisi"
										: showData[it.name]}
								</Body1>
							</Item>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
}
