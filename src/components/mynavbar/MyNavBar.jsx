import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import useScrollTrigger from "@mui/material/useScrollTrigger";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    darkBackground: {
      main: "#161616",
    },
    whiteBackground: {
      main: "#ffffff",
    },
  },
});



const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 
  const trigger = useScrollTrigger();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          bgcolor: trigger ? "#ffffff" : "transparent",
          color: trigger ? "#000000" : "white",
        }}
        style={{
          position: "fixed",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 7, display: { xs: "none", md: "flex" } }}
            >
              CGM
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
               
                <MenuItem key={"About"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><a href="#about">{"About"}</a></Typography>
                </MenuItem>
                <MenuItem key={"Projects"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{"Projects"}</Typography>
                </MenuItem>
                <MenuItem key={"Contact"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{"Contact"}</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              CGM
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key={"About"}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: trigger ? "#000000" : "white",
                  display: "block",
                }}
              >
                {"About"}
              </Button>
              <Button
                key={"Projects"}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: trigger ? "#000000" : "white",
                  display: "block",
                }}
              >
                {"Projects"}
              </Button>
              <Button
                key={"Contact"}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: trigger ? "#000000" : "white",
                  display: "block",
                }}
              >
                {"Contact"}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default NavBar;
