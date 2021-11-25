import * as React from "react";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@/components/input/Button";
import InputText from "@/components/input/Input";
import Box from "@mui/material/Box";
import { Subtitle2, Subtitle1 } from "@/components/typography/Heading";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

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

const FormPengumuman = ({ onChange, renderImages }) => {
  return (
    <>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Button variant="contained" size="small" color="success">
          <Subtitle2>Simpan</Subtitle2>
        </Button>
        <Link href="/admin/pengumuman">
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
          sx={{ width: "100%", mb: 1 }}
        />
        <label htmlFor="contained-button-file">
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

export default FormPengumuman;
