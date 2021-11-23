import * as React from "react";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@/components/input/Button";
import InputText, { BasicSelect } from "@/components/input/Input";
import Box from "@mui/material/Box";
import { Subtitle2 } from "@/components/typography/Heading";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
	<span ref={ref}>
		<Button {...rest}>{children}</Button>
	</span>
));

const FormMataPelajaran = ({ handleKelas, handleJurusan }) => {
	return (
		<>
			<Stack direction="row" spacing={1} sx={{ mb: 2 }}>
				<Button color="success">
					<Subtitle2>Simpan</Subtitle2>
				</Button>
				<Link href="/admin/matapelajaran">
					<ButtonNext color="cancel">
						<Subtitle2>Batal</Subtitle2>
					</ButtonNext>
				</Link>
			</Stack>
			<Box
				sx={{
					width: "100%",
				}}
			>
				<InputText label="Judul" sx={{ mb: 1, width: "100%" }} />
				<BasicSelect
					action={(e) => handleKelas.handleChange(e)}
					value={handleKelas.checkValue()}
					data={handleKelas.checkData()}
					label="Kelas"
				/>
				<BasicSelect
					action={(e) => handleJurusan.handleChange(e)}
					value={handleJurusan.checkValue()}
					data={handleJurusan.checkData()}
					label="Jurusan"
				/>
			</Box>
		</>
	);
};

export default FormMataPelajaran;
