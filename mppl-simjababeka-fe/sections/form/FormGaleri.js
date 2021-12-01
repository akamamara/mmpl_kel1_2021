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

const FormGaleri = ({ onChange, renderImages, handleInput, list }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        {list.map((item, index) => (
          <Box key={index} py={1} mb={1}>
            {item.type === "file" ? (
              <>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple={item.multiple}
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
              </>
            ) : (
              <InputText
                fullWidth
                label={item.label}
                name={item.name}
                type={item.type}
                onChange={handleInput}
              />
            )}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FormGaleri;
