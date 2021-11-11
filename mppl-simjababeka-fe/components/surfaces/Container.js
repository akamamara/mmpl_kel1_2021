import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import defaultTheme from "@/styles/global_mui";

function Container({ children, ...rest }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          padding: 1,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        {...rest}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}

export default Container;
