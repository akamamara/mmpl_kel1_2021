import * as React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import defaultTheme from "@/styles/global_mui";
// variant={variant}
// color={color}
// size={size}
export default function Buttons({ children, ...rest }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="contained" size="small" {...rest}>
        {children}
      </Button>
    </ThemeProvider>
  );
}
