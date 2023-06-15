import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Stack, Button } from "@mui/material";
import { Imagesfile } from "./Images/Images";

const pages = ["Jobs", "Companies", "Services"];

const LandingHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", m: 0, p: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <img
              src={Imagesfile.Signinlogo}
              alt="Logo"
              style={{ height: "30px", marginRight: "10px" }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "10px",
                    color: "black",
                    borderColor: "#6936F5",
                    fontWeight: "bold",
                    fontSize: "12px",
                    width: "100%",
                    height: "30px",
                  }}
                  href="/login"
                >
                  Sign In
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "10px",
                    fontWeight: "bold",
                    color: "white",
                    border: "none",
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    fontSize: "12px",
                    width: "100%",
                    height: "30px",
                  }}
                  href="/signup"
                >
                  Sign Up
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outlined"
              sx={{
                borderRadius: "10px",
                color: "black",
                borderColor: "#6936F5",
                fontWeight: "bold",
                fontSize: "12px",
                width: "80px",
                height: "30px",
                marginLeft: "10px",
              }}
              href="/login"
            >
              Sign In
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "10px",
                fontWeight: "bold",
                color: "white",
                border: "none",
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                fontSize: "12px",
                width: "80px",
                height: "30px",
                marginLeft: "10px",
              }}
              href="/signup"
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default LandingHeader;
