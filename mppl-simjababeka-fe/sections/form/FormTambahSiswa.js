import * as React from "react";
import Container from "@/components/surfaces/Container";
import InputText, { BasicSelect } from "@/components/surfaces/Input";
import TambahSiswa from "@/utils/list/FormList";
import { Subtitle2 } from "@/components/typography/Heading";
import { Box } from "@mui/system";
import Buttons from "@/components/surfaces/Button";

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
};

export default FormTambahSiswa;
