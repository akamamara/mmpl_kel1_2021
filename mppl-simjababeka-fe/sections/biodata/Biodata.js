import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@/components/input/Button";
import BiodataPribadi from "./BiodataPribadi";
import BiodataOrangTua from "./BiodataOrangTua";
import { Subtitle1, Subtitle2 } from "@/components/typography/Heading";
import { styled } from "@mui/material/styles";

import DataPribadiLabel, {
	DataPribadi,
	DataOrangTua,
} from "@/utils/list/BiodataList";

import FormEditProfil from "@/sections/biodata/FormEditProfil";

import { useSelector } from "react-redux";
import EnumRole from "@/utils/helper/EnumRole";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography component="div">{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		fontFamily: "Kreon, Roboto, sans-serif",
		fontSize: "1.00rem",
		color: "#0B5733",
	})
);

export default function Biodata({ dialogHandler, open, result, imagePreview }) {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const role = EnumRole(useSelector((state) => state.user.role.user_type));
	const dataProfil = useSelector((state) =>
		role === "guru" ? state.user.currentUserGuru : state.user.currentUserSiswa
	);

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
					sx={{ flexGrow: 1 }}
				>
					<StyledTab label="Pribadi" {...a11yProps(0)} />
					{/* <StyledTab label="Orang Tua" {...a11yProps(1)} /> */}
				</Tabs>
				<Button
					variant="contained"
					size="small"
					color="cancel"
					sx={{ mb: 1, mr: 1 }}
				>
					<Subtitle1>Hapus Akun</Subtitle1>
				</Button>
				<Button
					variant="contained"
					size="small"
					color="success"
					onClick={dialogHandler.handleClickOpen}
					sx={{ mb: 1 }}
				>
					<Subtitle1>Ubah Profil</Subtitle1>
				</Button>

				<FormEditProfil
					role={role}
					dialogHandler={dialogHandler}
					open={open}
					title="Ubah Profil"
					data={dataProfil}
					result={result}
					imagePreview={imagePreview}
				/>
			</Box>

			<TabPanel value={value} index={0}>
				<BiodataPribadi role={role} showData={dataProfil} />
			</TabPanel>
			{/* <TabPanel value={value} index={1}>
				<BiodataOrangTua showData={showDataOrangTua} />
			</TabPanel> */}
		</Box>
	);
}
