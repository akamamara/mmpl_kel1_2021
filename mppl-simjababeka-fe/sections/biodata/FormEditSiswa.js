import { Box } from "@mui/system";

import FormDialog from "@/components/surfaces/Dialog";
import { Subtitle2 } from "@/components/typography/Heading";
import { InputText, BasicSelect } from "@/components/input/Input";
import DataPribadiLabel from "@/utils/list/BiodataList";

function FormEditSiswa({ dialogHandler, open, title }) {
	return (
		<FormDialog dialogHandler={dialogHandler} open={open} title="Ubah Profil">
			{DataPribadiLabel.map((title, index) => (
				<Box key={index}>
					<Subtitle2>{title}</Subtitle2>
					{title === "Agama" ||
					title === "Golongan Darah" ||
					title === "Jenis Kelamin" ||
					title === "Kelas" ||
					title === "Jurusan" ? (
						<BasicSelect
							action={(e) => dialogHandler.handleChange(e, title)}
							value={dialogHandler.checkValue(title)}
							data={dialogHandler.checkData(title)}
						/>
					) : (
						<InputText
							name={title}
							sx={{ width: "100%", mb: 1 }}
							onChange={dialogHandler.handleInput}
						/>
					)}
				</Box>
			))}
		</FormDialog>
	);
}

export default FormEditSiswa;
