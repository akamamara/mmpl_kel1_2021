import * as React from "react";
import Container from "@/components/surfaces/Container";
import InputText, { BasicSelect } from "@/components/input/Input";
import TambahSiswa from "@/utils/list/FormList";
import { Subtitle2 } from "@/components/typography/Heading";
import { Box } from "@mui/system";
import Buttons from "@/components/input/Button";

<<<<<<< HEAD
const FormTambahSiswa = ({ handleChange, checkValue, checkData }) => {
	return (
		<>
			<Container>
				{TambahSiswa.map((title, index) => (
					<Box key={index}>
						<Subtitle2>{title}</Subtitle2>
						{title === "Agama" ||
						title === "Golongan Darah" ||
						title === "Jenis Kelamin" ? (
							<BasicSelect
								action={(e) => handleChange(e, title)}
								value={checkValue(title)}
								data={checkData(title)}
							/>
						) : (
							<InputText sx={{ width: "100%", mb: 1 }} />
						)}
					</Box>
				))}

				<Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
					<Buttons color="success">
						<Subtitle2>Simpan</Subtitle2>
					</Buttons>
				</Box>
			</Container>
		</>
	);
=======
const FormTambahSiswa = ({
  handleChange,
  checkValue,
  checkData,
  handleInput,
  handleSimpan,
}) => {
  return (
    <>
      <Container>
        {TambahSiswa.map((title, index) => (
          <Box key={index}>
            <Subtitle2>{title}</Subtitle2>
            {title === "Agama" ||
            title === "Golongan Darah" ||
            title === "Jenis Kelamin" ? (
              <BasicSelect
                action={(e) => handleChange(e, title)}
                value={checkValue(title)}
                data={checkData(title)}
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
>>>>>>> 408ae0228086b96cb2abb93581be734d79189cd6
};

export default FormTambahSiswa;
