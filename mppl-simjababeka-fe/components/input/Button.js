import * as React from "react";
import Button from "@mui/material/Button";

import { ThemeProvider } from "@mui/material";
import defaultTheme from "@/styles/global_mui";

export default function Buttons({
  variant,
  text,
  color,
  size,
  children,
  ...rest
}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant={variant} color={color} size={size} {...rest}>
        {text ? text : children}
      </Button>
    </ThemeProvider>
  );
}
