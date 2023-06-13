import * as React from "react";
import { styled } from "@mui/material/styles";

import {
  Grid,
  Typography,
  Paper,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Avatar,
  //   Accordion,
  //   AccordionSummary,
  //   AccordionDetails,
} from "@mui/material";
import { CardActionArea } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Imagesfile } from "./Images/Images";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  FaAmazon,
  FaEbay,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaAws,
  FaFacebook,
  FaShopify,
  FaSpotify,
  FaTiktok,
  FaTwitter,
  FaViber,
} from "react-icons/fa";
import WorkIcon from "@mui/icons-material/Work";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import NavigationIcon from "@mui/icons-material/Navigation";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //   textAlign: "center",
  border: "1px solid #895DA5",
  color: theme.palette.text.secondary,
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const JobSearch = () => {
  const cardStyle = {
    maxWidth: 345,
    margin: "10px",
  };

  const contentStyle = {
    marginBottom: "10px",
  };

  const iconContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "10px",
    width: "100%",
  };

  const iconStyle = {
    flexBasis: "25%",
    textAlign: "center",
    fontSize: "40px",
  };

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const card = (
    <React.Fragment>
      <CardContent>
      <CardActions>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          Marketing Operations Manager <br/>
        </Typography>

        
        <Avatar sx={{ backgroundColor:"lightblue", marginLeft:"auto" }} aria-label="companyname">
        <FaAws />
          </Avatar>
         </CardActions>
         <Typography sx={{ mb: 1.5 }}  color="text.secondary">
          Company Name
        </Typography>
        <Typography variant="body2">
          <WorkIcon /> 3-5 Years | <CurrencyRupeeIcon /> Not disclosed |{" "}
          <LocationOnIcon /> Chennai,Bangalore...
          <br />
          <DescriptionIcon /> 8+ years experience in marketing operations
          (consumer or higher educa...
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          Email{bull}CRM{bull}Salesforce{bull}Science
        </Typography>
      </CardContent>
      <CardActions>
        <Typography sx={{ fontSize: "12px" }}>1 Day Ago</Typography>
        <Button sx={{ marginLeft: "auto" }} size="small">
          {" "}
          <NavigationIcon />
          Save
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1, m: 3 }}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={2}
            // sx={{border: '1px solid black'}}
          >
            <Item>
              <Grid container alignItems="center">
                <Grid item xs={7}>
                  <Typography variant="h6" gutterBottom>
                    All Filters
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="caption" display="block" gutterBottom>
                    caption text
                  </Typography>
                </Grid>
              </Grid>

              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Work Mode</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Work From Home"
                    />
                    <FormControlLabel control={<Checkbox />} label="Remote" />
                    <FormControlLabel control={<Checkbox />} label="Hybird" />
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>Company</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Indian MNC"
                    />
                    <FormControlLabel control={<Checkbox />} label="Startup" />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Foreign MNC"
                    />
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>Location</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Chennai" />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Bangalore"
                    />
                    <FormControlLabel control={<Checkbox />} label="Velur" />
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>
          <Grid item xs={12} md={7}>
            <Item>
              <Box sx={{ minWidth: 275 }}>
                <Card
                  sx={{
                    borderRadius: "15px",
                    mt: 1,

                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    transition:
                      "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
                    "&:hover": {
                        boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.3)",
                    //   transform: "scale(1.02)",
                    },
                  }}
                  variant="outlined"
                >
                  <CardActionArea>{card}</CardActionArea>
                </Card>
              </Box>
              <Box sx={{ minWidth: 275 }}>
                <Card
                  sx={{
                    borderRadius: "15px",
                    mt: 1,

                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    transition:
                      "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
                    "&:hover": {
                        boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                  variant="outlined"
                >
                  <CardActionArea>{card}</CardActionArea>
                </Card>
              </Box>
              <Box sx={{ minWidth: 275 }}>
                <Card
                  sx={{
                    borderRadius: "15px",
                    mt: 1,
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    transition:
                      "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.3)",
                      
                    },
                  }}
                  variant="outlined"
                >
                  <CardActionArea>{card}</CardActionArea>
                </Card>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} md={3}>
            <Item>
              <Card style={cardStyle} sx={{ backgroundColor: "#E6E6FA" }}>
                <CardContent style={contentStyle}>
                  <Typography variant="body1" color="text.secondary">
                    See 100+ jobs in Featured Companies
                  </Typography>
                </CardContent>

                <div style={iconContainerStyle}>
                  <div style={iconStyle}>
                    <FaAmazon />
                  </div>
                  <div style={iconStyle}>
                    <FaEbay />
                  </div>
                  <div style={iconStyle}>
                    <FaCcPaypal />
                  </div>
                  <div style={iconStyle}>
                    <FaCcStripe />
                  </div>
                  <div style={iconStyle}>
                    <FaCcVisa />
                  </div>
                  <div style={iconStyle}>
                    <FaAws />
                  </div>
                  <div style={iconStyle}>
                    <FaFacebook />
                  </div>
                  <div style={iconStyle}>
                    <FaShopify />
                  </div>
                  <div style={iconStyle}>
                    <FaSpotify />
                  </div>
                  <div style={iconStyle}>
                    <FaTiktok />
                  </div>
                  <div style={iconStyle}>
                    <FaTwitter />
                  </div>
                  <div style={iconStyle}>
                    <FaViber />
                  </div>
                </div>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default JobSearch;
