import { Box } from "@mui/system";

import FormDialog from "@/components/surfaces/Dialog";
import Body1 from "@/components/typography/Body";
import { InputText } from "@/components/input/Input";

import { useSelector } from "react-redux";
import { ProfilGuruLabel, ProfilSiswaLabel } from "@/utils/list/BiodataList";

import { BasicSelect } from "@/components/input/Input";

const PreviewImage = ({ image }) => (
	<img
		src={image}
		alt="Preview Image"
		style={{ width: 160, height: 160, borderRadius: 999, objectFit: "cover" }}
	/>
);

function FormEditProfil({
	role,
	dialogHandler,
	open,
	title,
	imagePreview,
	data,
}) {
	const idUser = useSelector((state) => state.user.role.id);

	return (
		<FormDialog
			dialogHandler={dialogHandler}
			open={open}
			title={title}
			onSubmitData={{ id: idUser, role: role, data: data }}
		>
			{(role === "guru" ? ProfilGuruLabel : ProfilSiswaLabel).map(
				(item, index) => (
					<Box key={index} py={1} mb={1}>
						{item.type === "selection" ? (
							<BasicSelect
								action={dialogHandler.handleInput}
								label={item.label}
								name={item.name}
								data={item.data}
							/>
						) : item.type === "file" ? (
							<>
								{!!imagePreview ? (
									<PreviewImage image={imagePreview} />
								) : data["foto_guru"] ? (
									<PreviewImage image={data["foto_guru"]} />
								) : null}

								<Body1>{item.label}</Body1>
								<input
									name={item.name}
									type={item.type}
									onChange={dialogHandler.handleInput}
									accept={item.accept}
								/>
							</>
						) : (
							<InputText
								fullWidth
								label={item.label}
								name={item.name}
								type={item.type}
								defaultValue={data[item.name]}
								onChange={dialogHandler.handleInput}
								disabled={
									item.name === "email_guru" || item.name === "email_siswa"
										? true
										: false
								}
							/>
						)}
					</Box>
				)
			)}
		</FormDialog>
	);
}

export default FormEditProfil;
