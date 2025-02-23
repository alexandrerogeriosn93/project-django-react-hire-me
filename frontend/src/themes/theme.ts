import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2596be",
    },
    secondary: {
      main: "#f5f5f5",
    },
    text: {
      primary: "#2596be",
      secondary: "#6c6767",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderRadius: 0,
          backgroundColor: "#2596be",
          textTransform: "none",
          fontWeight: "bold",
          paddingTop: "12px",
          paddingBottom: "12px",
          ":hover": {
            backgroundColor: "#2596be",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          required: false,
        },
        required: true,
      },
    },
  },
});

export default theme;
