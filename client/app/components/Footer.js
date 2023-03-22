import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[300],
    },
    secondary: {
      main: grey[800],
    },
  },
});

const Footer = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar color="primary" position="sticky">
          <footer className="footer">
            <p className="footertext">&copy; 2023 Jackie Codes</p>
          </footer>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Footer;
