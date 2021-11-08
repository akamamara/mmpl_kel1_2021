import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#D6544B",
      light: "#EA8983",
      contrastText: "#fff",
    },
    secondary: {
      main: "#D8B47F",
      contrastText: "#323232",
    },
    text: {
      primary: "#323232",
    },
    success: {
      main: "#B0EACD",
    },
    cancel: {
      main: "#EA8983",
    },
  },
});

export default defaultTheme;
