import * as React from "react";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@/components/input/Button";
import InputText from "@/components/input/Input";
import Box from "@mui/material/Box";
import { Subtitle2 } from "@/components/typography/Heading";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
	<span ref={ref}>
		<Button {...rest}>{children}</Button>
	</span>
));

const FormBerita = () => {
	return (
		<>
			<Stack direction="row" spacing={1} sx={{ mb: 2 }}>
				<Button color="success">
					<Subtitle2>Simpan</Subtitle2>
				</Button>
				<Link href="/admin/berita">
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
				<InputText
					label="Deskripsi"
					multiline
					rows={20}
					sx={{ width: "100%" }}
				/>
			</Box>
		</>
	);
};

export default FormBerita;
