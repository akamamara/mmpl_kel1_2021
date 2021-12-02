import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import FormGaleri from "@/sections/form/FormGaleri";
import Image from "next/image";

import FormData from "form-data";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import { Subtitle2, Subtitle1 } from "@/components/typography/Heading";
import Button from "@/components/input/Button";
import Stepper from "@/components/navigation/Stepper";

import { GaleriForm, PhotosForm } from "@/utils/list/FormList";

import { postGaleri, postImageToGaleriId } from "@/utils/api/galeri";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
	<span ref={ref}>
		<Button variant="contained" size="small" {...rest}>
			{children}
		</Button>
	</span>
));
ButtonNext.displayName = "ButtonNext";

const TambahGaleriPage = () => {
	const [previewImage, setPreviewImage] = React.useState([]);
	const [selectedImage, setSelectedImage] = React.useState([]);
	const [galeri, setGaleri] = React.useState([]);
	const [photos, setPhotos] = React.useState([]);
	const [data, setData] = React.useState([]);
	const [activeStep, setActiveStep] = React.useState(0);

	const galeriHandler = {
		handleInput: (e) => {
			setGaleri({ ...galeri, [e.target.name]: e.target.value });
		},

		handleSubmit: async () => {
			if (galeri.nama_galeri && galeri.keterangan_galeri && selectedImage[0]) {
				let formData = new FormData();
				formData.append("nama_galeri", galeri.nama_galeri);
				formData.append("keterangan_galeri", galeri.keterangan_galeri);
				formData.append("sampul_galeri", selectedImage[0]);
				// for (let i = 0; i < selectedImage.length; i++) {
				//   formData.append(`image_${i}`, selectedImage[i]);
				// }
				// Log the key/value pairs
				// for (var pair of formData.entries()) {
				//   console.log(pair);
				// }
				postGaleri(formData, setData);
				setSelectedImage([]);
				setPreviewImage([]);
			}
		},
	};

	const photosHandler = {
		handleInput: (e) => {
			setPhotos({ ...photos, [e.target.name]: e.target.value });
		},

		handleSubmit: async () => {
			console.log(photos);
			console.log(data);
			if (photos.nama_gambar && selectedImage[0]) {
				let formData = new FormData();
				for (let i = 0; i < selectedImage.length; i++) {
					formData.append("nama_gambar", `${photos.nama_gambar}_${i}`);
					formData.append("nama_galeri", data.id);
					formData.append("gambar_galeri", selectedImage[i]);
					postImageToGaleriId(formData);
				}
				setSelectedImage([]);
				setPreviewImage([]);
			}
		},
	};

	const imageHandler = (e) => {
		setPreviewImage([]);
		setSelectedImage([]);
		if (e.target.files) {
			const fileArray = Array.from(e.target.files).map((file) =>
				URL.createObjectURL(file)
			);
			// console.log(e.target.files);
			setPreviewImage((prevImages) => prevImages.concat(fileArray));
			Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
			setSelectedImage(e.target.files);
		}
	};

	const renderPhotos = (source) => {
		return source.map((photos) => {
			return (
				<Image
					src={photos}
					key={photos}
					width="200"
					height="200"
					alt={photos}
				/>
			);
		});
	};

	const simpanHandler = () => {
		if (judul && keterangan && selectedImage[0]) {
			let formData = new FormData();

			formData.append("judul", judul);
			formData.append("keterangan", keterangan);
			for (let i = 0; i < selectedImage.length; i++) {
				formData.append(`image_${i}`, selectedImage[i]);
			}
			// Log the key/value pairs
			for (var pair of formData.entries()) {
				console.log(pair);
			}
		} else {
			console.log("Isi formnya ya");
		}
		// console.log(selectedImage);
	};

	const stepperFunction = {
		handleBack: () => {
			setActiveStep((prev) => prev - 1);
		},
		handleNext: () => {
			if (activeStep === 0)
				galeriHandler
					.handleSubmit()
					.then(() => setActiveStep((prev) => prev + 1));
			if (activeStep === stepContent.length - 1)
				photosHandler
					.handleSubmit()
					.then(() => setActiveStep((prev) => prev + 1));
		},
	};

	const stepContent = [
		{
			label: "Buat Galeri",
			content: (
				<FormGaleri
					onChange={imageHandler}
					renderImages={renderPhotos(previewImage)}
					handleInput={galeriHandler.handleInput}
					list={GaleriForm}
				/>
			),
		},
		{
			label: "Masukkan Gambar",
			content: (
				<FormGaleri
					onChange={imageHandler}
					renderImages={renderPhotos(previewImage)}
					handleInput={photosHandler.handleInput}
					list={PhotosForm}
				/>
			),
		},
	];

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<>
			<Stack direction="row" spacing={1} sx={{ mb: 2 }}>
				<Button
					variant="contained"
					size="small"
					color="success"
					onClick={handleReset}
				>
					<Subtitle2>Buat Baru</Subtitle2>
				</Button>
				<Link href="/admin/galeri">
					<ButtonNext color="cancel">
						<Subtitle2>Batal</Subtitle2>
					</ButtonNext>
				</Link>
			</Stack>
			<Stepper
				stepperFunction={stepperFunction}
				activeStep={activeStep}
				steps={stepContent}
			/>
		</>
	);
};

TambahGaleriPage.getLayout = (page) => {
	return <AdminLayout>{page}</AdminLayout>;
};

export default TambahGaleriPage;
