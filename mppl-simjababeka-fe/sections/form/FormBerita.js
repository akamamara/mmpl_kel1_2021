import * as React from "react";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@/components/input/Button";
import InputText from "@/components/input/Input";
import Box from "@mui/material/Box";
import { Subtitle2, Subtitle1 } from "@/components/typography/Heading";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Input = styled("input")({
  display: "none",
});

const FormBerita = ({ handleInput, list }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        {list.map((item, index) => (
          <Box key={index} py={1} mb={1}>
            <InputText
              fullWidth
              label={item.label}
              name={item.name}
              multiline={item.name === "isi_berita" ? true : false}
              rows={20}
              type={item.type}
              onChange={handleInput}
            />
          </Box>
        ))}
        {/* <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={onChange}
          />
          <Button
            variant="contained"
            size="small"
            component="span"
            color="success"
          >
            <PhotoCamera />
            <Subtitle1 sx={{ ml: 1 }}>Upload Foto</Subtitle1>
          </Button>
        </label>
        <Stack direction="row" sx={{ mt: 1 }}>
          {renderImages}
        </Stack> */}
      </Box>
    </>
  );
};

export default FormBerita;
