import { Box } from "@mui/system";

import FormDialog from "@/components/surfaces/Dialog";
import { Subtitle2 } from "@/components/typography/Heading";
import { InputText, BasicSelect } from "@/components/input/Input";

import { useSelector } from "react-redux";
import { ProfilGuruLabel } from "@/utils/list/BiodataList";
import EnumRole from "@/utils/helper/EnumRole";

function FormEditGuru({ dialogHandler, open, title, data }) {
	const idUser = useSelector((state) => state.user.role.id);
	const role = EnumRole(useSelector((state) => state.user.role.user_type));

	return (
		<FormDialog
			dialogHandler={dialogHandler}
			open={open}
			title={title}
			onSubmitData={{ id: idUser, role: role, data: data }}
		>
			{ProfilGuruLabel.map((item, index) => (
				<Box key={index} py={1} mb={1}>
					<InputText
						fullWidth
						label={item.label}
						name={item.name}
						type={item.type}
						defaultValue={data[item.name]}
						onChange={dialogHandler.handleInput}
						disabled={item.name === "email_guru" ? true : false}
					/>
				</Box>
			))}
		</FormDialog>
	);
}

export default FormEditGuru;
