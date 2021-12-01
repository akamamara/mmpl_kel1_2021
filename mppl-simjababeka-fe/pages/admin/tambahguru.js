import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import { Heading3 } from "@/components/typography/Heading";
import {
	AgamaList,
	GolonganDarahList,
	JenisKelaminList,
} from "@/utils/list/SelectList";
import FormTambahGuru from "@/sections/form/FormTambahGuru";

import Container from "@/components/surfaces/Container";
import Stepper from "@/components/navigation/Stepper";

import { registerValue } from "@/utils/list/BiodataList";
import { registerGuru, putProfileID } from "@/utils/api/user";

const TambahGuruPage = () => {
	const [resultRegister, setResultRegister] = React.useState([]);
	const [resultProfile, setResultProfile] = React.useState([]);
	const [currentId, setCurrentId] = React.useState(null);
	const [activeStep, setActiveStep] = React.useState(0);

	const registerHandler = {
		handleInput: (e) => {
			setResultRegister({ ...resultRegister, [e.target.name]: e.target.value });
		},

		handleSubmit: async () => {
			console.log("Data Register", resultRegister);
			registerGuru(1, setCurrentId, resultRegister);
		},
	};

	const profileHandler = {
		handleInput: (e) => {
			setResultProfile({ ...resultProfile, [e.target.name]: e.target.value });
		},

		handleSubmit: async () => {
			console.log("Data edit", resultProfile);
			putProfileID(currentId, "guru", resultProfile);
		},
	};

	const stepperFunction = {
		handleBack: () => {
			setActiveStep((prev) => prev - 1);
		},
		handleNext: () => {
			if (activeStep === 0)
				registerHandler
					.handleSubmit()
					.then(() => setActiveStep((prev) => prev + 1));
			if (activeStep === stepContent.length - 1)
				profileHandler
					.handleSubmit()
					.then(() => setActiveStep((prev) => prev + 1));
		},
	};

	const stepContent = [
		{
			label: "Register Guru",
			content: (
				<FormTambahGuru
					handleInput={registerHandler.handleInput}
					list={registerValue}
				/>
			),
		},
		{
			label: "Tambah Profil Guru",
			content: <FormTambahGuru handleInput={profileHandler.handleInput} />,
		},
	];

	return (
		<>
			<Heading3 sx={{ mb: 1 }}>Tambah Guru Baru</Heading3>
			<Container>
				<Stepper
					stepperFunction={stepperFunction}
					activeStep={activeStep}
					steps={stepContent}
				/>
			</Container>
		</>
	);
};

TambahGuruPage.getLayout = (page) => {
	return <AdminLayout>{page}</AdminLayout>;
};

export default TambahGuruPage;
