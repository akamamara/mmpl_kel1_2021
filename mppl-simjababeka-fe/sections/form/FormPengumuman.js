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

const FormPengumuman = ({ handleInput, list }) => {
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
              multiline={item.name === "isi_pengumuman" ? true : false}
              rows={20}
              type={item.type}
              onChange={handleInput}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FormPengumuman;
