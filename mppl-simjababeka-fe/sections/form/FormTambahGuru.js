import * as React from "react";
import InputText, {
	BasicSelect,
	CheckboxSelect,
} from "@/components/input/Input";
import { TambahGuru } from "@/utils/list/FormList";
import { Subtitle2 } from "@/components/typography/Heading";
import { Box } from "@mui/system";
import Buttons from "@/components/input/Button";
import { DaftarMataPelajaran } from "@/utils/list/SelectList";
import { ProfilGuruLabel } from "@/utils/list/BiodataList";

const FormTambahGuru = ({ handleInput, list = ProfilGuruLabel }) => {
	return (
		<>
			{list.map((item, index) => (
				<Box key={index} py={1} mb={1}>
					<InputText
						fullWidth
						label={item.label}
						name={item.name}
						type={item.type}
						onChange={handleInput}
						disabled={item.name === "email_guru" ? true : false}
					/>
				</Box>
			))}
		</>
	);
};

export default FormTambahGuru;
