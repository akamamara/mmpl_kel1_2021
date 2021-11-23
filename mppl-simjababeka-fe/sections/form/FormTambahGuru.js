import * as React from "react";
import Container from "@/components/surfaces/Container";
import InputText, {
	BasicSelect,
	CheckboxSelect,
} from "@/components/input/Input";
import { TambahGuru } from "@/utils/list/FormList";
import { Subtitle2 } from "@/components/typography/Heading";
import { Box } from "@mui/system";
import Buttons from "@/components/input/Button";
import { DaftarMataPelajaran } from "@/utils/list/SelectList";

const FormTambahGuru = ({
	handleChange,
	checkValue,
	checkData,
	handleCheckbox,
	handleInput,
	handleSimpan,
}) => {
	return (
		<>
			<Container>
				{TambahGuru.map((title, index) => (
					<Box key={index}>
						<Subtitle2>{title}</Subtitle2>
						{title === "Jenis Kelamin" ? (
							<BasicSelect
								action={(e) => handleChange(e, title)}
								value={checkValue(title)}
								data={checkData(title)}
							/>
						) : title === "Mata Pelajaran yang Diampu" ? (
							<CheckboxSelect
								data={DaftarMataPelajaran}
								handleValue={(e, value) => handleCheckbox(e, value)}
							/>
						) : (
							<InputText
								name={title}
								sx={{ width: "100%", mb: 1 }}
								onChange={handleInput}
							/>
						)}
					</Box>
				))}

				<Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
					<Buttons color="success" onClick={handleSimpan}>
						<Subtitle2>Simpan</Subtitle2>
					</Buttons>
				</Box>
			</Container>
		</>
	);
};

export default FormTambahGuru;
