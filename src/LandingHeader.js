// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import MenuItem from "@mui/material/MenuItem";
// import { Stack, Button } from "@mui/material";
// import { Imagesfile } from "./Images/Images";
// import { Link as RouterLink, useNavigate } from "react-router-dom";

// const pages = ["Jobs", "Companies", "Services"];

// const LandingHeader = ({ isLoggedIn }) => {
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "white", m: 0, p: 0 }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Box sx={{ flexGrow: 1 }}>
//             <img
//               src={Imagesfile.Signinlogo}
//               alt="Logo"
//               style={{ height: "30px", marginRight: "10px", cursor: "pointer" }}
//               onClick={() => navigate("/")}
//             />
//           </Box>

//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "flex", sm: "flex", md: "none" },
//             }}
//           >
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="primary"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "flox", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//               {!isLoggedIn && (
//                 <MenuItem component={RouterLink} to="/login">
//                   <Button
//                     variant="outlined"
//                     style={{
//                       borderRadius: "10px",
//                       color: "black",
//                       borderColor: "#6936F5",
//                       fontWeight: "bold",
//                       fontSize: "12px",
//                       width: "100%",
//                       height: "30px",
//                     }}
//                   >
//                     Sign In
//                   </Button>
//                 </MenuItem>
//               )}
//               {!isLoggedIn && (
//                 <MenuItem component={RouterLink} to="/signup">
//                   <Button
//                     variant="outlined"
//                     style={{
//                       borderRadius: "10px",
//                       fontWeight: "bold",
//                       color: "white",
//                       border: "none",
//                       background:
//                         "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//                       fontSize: "12px",
//                       width: "100%",
//                       height: "30px",
//                     }}
//                   >
//                     Sign Up
//                   </Button>
//                 </MenuItem>
//               )}
              
//             </Menu>
//           </Box>

//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", md: "flex" },
//               justifyContent: "flex-end",
//               alignItems: "center",
//             }}
//           >
//             {pages.map((page) => (
//               <Typography
//                 key={page}
//                 variant="body2"
//                 color="text.primary"
//                 sx={{ ml: 4, fontWeight: "bold" }}
//               >
//                 {page}
//               </Typography>
//             ))}
//             {!isLoggedIn && (
//               <>
//                 <Button
//                   component={RouterLink}
//                   to="/login"
//                   variant="outlined"
//                   sx={{
//                     ml: 4,
//                     borderRadius: "10px",
//                     color: "black",
//                     borderColor: "#6936F5",
//                     fontWeight: "bold",
//                     fontSize: "12px",
//                     height: "30px",
//                   }}
//                 >
//                   Sign In
//                 </Button>
//                 <Button
//                   component={RouterLink}
//                   to="/signup"
//                   variant="outlined"
//                   sx={{
//                     ml: 2,
//                     borderRadius: "10px",
//                     fontWeight: "bold",
//                     color: "white",
//                     border: "none",
//                     background:
//                       "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//                     fontSize: "12px",
//                     height: "30px",
//                   }}
//                 >
//                   Sign Up
//                 </Button>
//               </>
//             )}
//             {isLoggedIn && (
//               <>
//                 <Button
//                   component={RouterLink}
//                   to="/profile"
//                   variant="outlined"
//                   sx={{
//                     ml: 2,
//                     borderRadius: "10px",
//                     fontWeight: "bold",
//                     color: "white",
//                     border: "none",
//                     background:
//                       "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//                     fontSize: "12px",
//                     height: "30px",
//                   }}
//                 >
//                   Profile
//                 </Button>
//                 <Button
//                   component={RouterLink}
//                   onClick={() => {
//                     localStorage.removeItem("accesstoken");
//                     localStorage.removeItem("userId");
//                     window.location.pathname = "/";
//                   }}
//                   variant="outlined"
//                   sx={{
//                     ml: 2,
//                     borderRadius: "10px",
//                     fontWeight: "bold",
//                     color: "white",
//                     border: "none",
//                     background:
//                       "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//                     fontSize: "12px",
//                     height: "30px",
//                   }}
//                 >
//                   Sign Out
//                 </Button>
              
//               </>
//             )}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default LandingHeader;

import React from "react";
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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={20} ref={ref} variant="filled" {...props} />;
});
const LandingHeader = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    { name: "Jobs", path: "/jobsearch" },
    { name: "Companies", path: "/" },
    ...(isLoggedIn
      ? [{ name: "Applied Jobs", path: "/appliedjobs" }]
      : []),
  ];


  const [open, setOpen] = React.useState(false);

  const handleSignout = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    
    <>
 <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{ top: '10%', transform: 'translateY(-10%)' }}
        >
        <Alert  severity="warning" sx={{ width: '100%', }}>
          Sign Out successfully!
        </Alert>
      </Snackbar>

    <AppBar position="static" sx={{ backgroundColor: "white", m: 0, p: 0 }}>


      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <img
              src={Imagesfile.Signinlogo}
              alt="Logo"
              style={{ height: "30px", marginRight: "10px", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "flex", md: "none" },
            }}
          >
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
                display: { xs: "flex", sm: "flex", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"  component={RouterLink} to={page.path}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
              {!isLoggedIn && (
                <>
                  <MenuItem component={RouterLink} to="/login">
                    <Button
                      variant="outlined"
                      style={{
                        borderRadius: "10px",
                        color: "black",
                        borderColor: "#6936F5",
                        fontWeight: "bold",
                        fontSize: "12px",
                        width: "100%",
                        height: "30px",
                      }}
                    >
                      Sign In
                    </Button>
                  </MenuItem>
                  <MenuItem component={RouterLink} to="/signup">
                    <Button
                      variant="outlined"
                      style={{
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
                    >
                      Sign Up
                    </Button>
                  </MenuItem>
                </>
              )}
              {isLoggedIn && (
                <>
                  <MenuItem component={RouterLink} to="/profile">
                  <Button
                 
                  variant="outlined"
                  sx={{
                    ml: 2,
                    borderRadius: "10px",
                    fontWeight: "bold",
                    color: "white",
                    border: "none",
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    fontSize: "12px",
                    height: "30px",
                  }}
                >
                  Profile
                </Button>
                  </MenuItem>
                  <MenuItem component={RouterLink} to="/">
                  <Button
                  component={RouterLink}
                  onClick={() => {
                    localStorage.removeItem("accesstoken");
                    localStorage.removeItem("userId");
                    window.location.pathname = "/";
                  }}
                  variant="outlined"
                  sx={{
                    ml: 2,
                    borderRadius: "10px",
                    fontWeight: "bold",
                    color: "white",
                    border: "none",
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    fontSize: "12px",
                    height: "30px",
                  }}
                >
                  Sign Out
                </Button>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page.name}
                variant="body2"
                color="text.primary"
                component={RouterLink}
                to={page.path}
                sx={{ ml: 4, fontWeight: "bold" }}
              >
                {page.name}
              </Typography>
            ))}
            {!isLoggedIn && (
              <>
                <Button
                  component={RouterLink}
                  to="/login"
                  variant="outlined"
                  sx={{
                    ml: 4,
                    borderRadius: "10px",
                    color: "black",
                    borderColor: "#6936F5",
                    fontWeight: "bold",
                    fontSize: "12px",
                    height: "30px",
                  }}
                >
                  Sign In
                </Button>
                <Button
                  component={RouterLink}
                  to="/signup"
                  variant="outlined"
                  sx={{
                    ml: 2,
                    borderRadius: "10px",
                    fontWeight: "bold",
                    color: "white",
                    border: "none",
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    fontSize: "12px",
                    height: "30px",
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
            {isLoggedIn && (
              <>
                <Button
                  component={RouterLink}
                  to="/profile"
                  variant="outlined"
                  sx={{
                    ml: 2,
                    borderRadius: "10px",
                    fontWeight: "bold",
                    color: "white",
                    border: "none",
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    fontSize: "12px",
                    height: "30px",
                  }}
                >
                  Profile
                </Button>
                <Button
                  component={RouterLink}
                  onClick={() => {
                    localStorage.removeItem("accesstoken");
                    localStorage.removeItem("userId");
                    window.location.pathname = "/";
                    handleSignout();
                  }}
                  variant="outlined"
                  sx={{
                    ml: 2,
                    borderRadius: "10px",
                    fontWeight: "bold",
                    color: "white",
                    border: "none",
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    fontSize: "12px",
                    height: "30px",
                  }}
                >
                  Sign Out
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};

export default LandingHeader;

