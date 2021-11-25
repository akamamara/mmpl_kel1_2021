import * as React from "react";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@/components/input/Button";
import InputText from "@/components/input/Input";
import Box from "@mui/material/Box";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import { Subtitle1, Subtitle2 } from "@/components/typography/Heading";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
  <span ref={ref}>
    <Button variant="contained" size="small" {...rest}>
      {children}
    </Button>
  </span>
));

const Input = styled("input")({
  display: "none",
});

const FormGaleri = ({ onChange, renderImages, simpanHandler }) => {
  return (
    <>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Button
          variant="contained"
          size="small"
          color="success"
          onClick={simpanHandler}
        >
          <Subtitle2>Simpan</Subtitle2>
        </Button>
        <Link href="/admin/galeri">
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
        <InputText label="Keterangan" sx={{ mb: 1, width: "100%" }} />
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
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
            {/* <Typography sx={{ ml: 1 }}>Upload Foto</Typography> */}
            <Subtitle1 sx={{ ml: 1 }}>Upload Foto</Subtitle1>
          </Button>
        </label>
        <Stack direction="row" sx={{ mt: 1 }}>
          {renderImages}
        </Stack>
      </Box>
    </>
  );
};

export default FormGaleri;
