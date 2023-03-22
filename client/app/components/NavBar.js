import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
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

const NavBar = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar className="navigations" color="primary" position="sticky">
          <Toolbar>
            <ButtonGroup variant="contained" aria-label="outlined button group">
              <Button color="secondary">
                <Link to="/">Projects</Link>
              </Button>
              <Button color="secondary">
                <Link to="/about">About the Coder</Link>
              </Button>
              <Button color="secondary">
                <a
                  href="Jackie_Manginelli_Resume.pdf"
                  download="Jackie_Manginelli_Resume.pdf"
                >
                  Resume
                </a>
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default NavBar;
