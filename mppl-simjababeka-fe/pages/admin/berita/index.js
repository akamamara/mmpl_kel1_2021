import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordBerita } from "@/utils/table/TableRecord";
import { VariableBerita } from "@/utils/table/TableVariable";
import InputText from "@/components/input/Input";
import Button from "@/components/input/Button";
import Link from "next/link";
import { Subtitle2 } from "@/components/typography/Heading";

import FormDialog from "@/components/surfaces/Dialog";
import {
	getBeritaPartial,
	deleteBeritaById,
	updateBeritaById,
} from "@/utils/api/berita";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
	<span ref={ref}>
		<Button variant="contained" size="small" {...rest}>
			{children}
		</Button>
	</span>
));

ButtonNext.displayName = "ButtonNext";

const BeritaPage = () => {
	const [data, setData] = React.useState([]);
	const [filteredData, setFilteredData] = React.useState([]);
	const [isChange, setIsChange] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const [idEdit, setIdEdit] = React.useState(0);

	const [result, setResult] = React.useState([]);
	const [judulBerita, setJudulBerita] = React.useState("");
	const [deskripsiBerita, setDeskripsiBerita] = React.useState("");

	const [defaultValue, setDefaultValue] = React.useState([]);

	React.useEffect(() => {
		getBeritaPartial(setData);
		return () => {
			setData([]);
		};
	}, []);

	const dialogEditHandler = {
		handleClickOpen: () => {
			setOpen(true);
		},

		handleClose: () => {
			setOpen(false);
		},

		handleSimpan: () => {
			if (result.judul_berita && result.isi_berita) {
				console.log(idEdit);
				const simpan = {
					id: idEdit,
					judul_berita: result.judul_berita,
					isi_berita: result.isi_berita,
				};
				updateBeritaById(idEdit, simpan);
				setOpen(!open);
				let findIndex = data.map((x) => x.id).indexOf(idEdit);
				console.log(findIndex);
				data.splice(findIndex, 1, {
					id: idEdit,
					judul_berita: result.judul_berita,
					isi_berita: result.isi_berita,
					date: "--",
				});
			}
		},
	};

	const handleChange = (event) => {
		if (event.target.value.length > 0) {
			let searchKeyword = data.filter((item) =>
				item.judul_berita
					? item.judul_berita
							.toLowerCase()
							.includes(event.target.value.toLowerCase())
					: ""
			);
			setIsChange(true);
			setFilteredData(searchKeyword);
		} else if (event.target.value.length === 0) {
			setData(data);
			setIsChange(false);
		}
	};

	const handleEdit = (row) => {
		setOpen(!open);
		const id = row[0];
		const dataToShow = data.find((item) => item.id === id);
		setIdEdit(id);
		setDefaultValue(dataToShow);
		setResult(dataToShow);
	};

	const handleHapus = (row) => {
		console.log(row[0]);
		const id = row[0];
		deleteBeritaById(id);
		const newData = data.filter((item) => item.id !== id);
		setData(newData);
		setFilteredData(newData);
	};

	const handleJudulBerita = {
		handleInput: (event) => {
			setJudulBerita(event.target.value);
			setResult({ ...result, [event.target.name]: event.target.value });
		},
		checkValue: () => {
			return judulBerita;
		},
	};

	const handleDeskripsiBerita = {
		handleInput: (event) => {
			setDeskripsiBerita(event.target.value);
			setResult({ ...result, [event.target.name]: event.target.value });
		},
		checkValue: () => {
			return deskripsiBerita;
		},
	};

	return (
		<>
			<InputText
				label="Cari judul berita"
				sx={{ width: "50%", mb: 1 }}
				onChange={handleChange}
			/>
			<Link href="/admin/berita/tambahberita" passHref>
				<ButtonNext color="success" sx={{ mb: 1 }}>
					<Subtitle2>Tambah Berita</Subtitle2>
				</ButtonNext>
			</Link>
			<DenseTable
				record={isChange ? filteredData : data}
				variable={VariableBerita}
				actionable={true}
				handleEdit={handleEdit}
				handleHapus={handleHapus}
			/>
			<FormDialog
				dialogHandler={dialogEditHandler}
				open={open}
				title="Ubah Berita"
			>
				<InputText
					name="judul_berita"
					label="Judul Berita"
					sx={{ mb: 1, width: "100%" }}
					onChange={(e) => handleJudulBerita.handleInput(e)}
					defaultValue={defaultValue.judul_berita}
				/>
				<InputText
					name="isi_berita"
					label="Deskripsi"
					sx={{ mb: 1, width: "100%" }}
					multiline
					rows={5}
					onChange={(e) => handleDeskripsiBerita.handleInput(e)}
					defaultValue={defaultValue.isi_berita}
				/>
			</FormDialog>
		</>
	);
};

BeritaPage.getTitle = "Berita";

BeritaPage.getLayout = (page) => {
	return <AdminLayout>{page}</AdminLayout>;
};

export default BeritaPage;
