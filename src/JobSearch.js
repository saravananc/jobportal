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
  Stack,
  Chip,
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
import FilterAltIcon from "@mui/icons-material/FilterAlt";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //   textAlign: "center",
  // border: "1px solid #D3D3D3",
  borderRadius: "10px",
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

  const cardData = [
    {
      title: "Marketing Operations Manager",
      companyName: "Google",
      experience: "3-5 Years",
      salary: "Not disclosed",
      locations: "Chennai, Bangalore",
      description:
        "4+ years experience in marketing operations (consumer or higher educa...)",
      skills: "Email, CRM, Salesforce, Science",
      timestamp: "1 Day Ago",
    },
    {
      title: "Full Stack Developer",
      companyName: "Cidc",
      experience: "3-5 Years",
      salary: "Not disclosed",
      locations: "Chennai, Bangalore",
      description: "3+ years experience in developing web applications",
      skills: "Reactjs, Nodejs, AWS, .NET",
      timestamp: "5 Day Ago",
    },
    {
      title: "Marketing Operations Manager",
      companyName: "Apple Inc",
      experience: "3-5 Years",
      salary: "Not disclosed",
      locations: "Chennai, Bangalore",
      description:
        "8+ years experience in marketing operations (consumer or higher educa...)",
      skills: "Email, CRM, Salesforce, Science",
      timestamp: "1 Day Ago",
    },
    // Add more card data objects as needed
  ];

  const [checkboxOptions, setCheckboxOptions] = React.useState([
    {
      id: "panel1",
      heading: "Work Mode",
      options: [
        { label: "Work From Home" },
        { label: "Remote" },
        { label: "Hybrid" },
      ],
    },
    {
      id: "panel2",
      heading: "Company",
      options: [
        { label: "Indian MNC" },
        { label: "Startup" },
        { label: "Foreign MNC" },
      ],
    },
    {
      id: "panel3",
      heading: "Location",
      options: [
        { label: "Chennai" },
        { label: "Bangalore" },
        { label: "Velur" },
      ],
    },
    {
      id: "panel4",
      heading: "Department",
      options: [
        { label: "Marketing" },
        { label: "HR" },
        { label: "Engineering" },
        { label: "UX Design" },
      ],
    },
  ]);

  const handleCheckboxChange = (panelIndex, optionIndex) => (event) => {
    const updatedOptions = [...checkboxOptions];
    updatedOptions[panelIndex].options[optionIndex].checked =
      event.target.checked;
    setCheckboxOptions(updatedOptions);

    console.log(
      `${checkboxOptions[panelIndex].heading} - ${
        checkboxOptions[panelIndex].options[optionIndex].label
      } ${event.target.checked ? "checked" : "unchecked"}`
    );
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, m: 3 }}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={3}
            // sx={{border: '1px solid black'}}
          >
            <Item elevation={6}>
              <Grid container alignItems="center">
                <Grid item xs={7}>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      sx={{ backgroundColor: "white", fontSize: "20px" }}
                      icon={<FilterAltIcon style={{ color: "lightblue" }} />}
                      label="Filters"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="caption" display="block" gutterBottom>
                    {/* caption text */}
                  </Typography>
                </Grid>
              </Grid>

              <div>
                {checkboxOptions.map((data, panelIndex) => (
                  <Accordion
                    key={data.id}
                    expanded={expanded === data.id}
                    onChange={handleChange(data.id)}
                  >
                    <AccordionSummary
                      aria-controls={`${data.id}-content`}
                      id={`${data.id}-header`}
                    >
                      <Typography>{data.heading}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup>
                        {data.options.map((option, optionIndex) => (
                          <FormControlLabel
                            key={optionIndex}
                            control={
                              <Checkbox
                                onChange={handleCheckboxChange(
                                  panelIndex,
                                  optionIndex
                                )}
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label={option.label}
                          />
                        ))}
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Typography color="blueviolet" variant="subtitle2" gutterBottom>
                Search : Marketing Jobs(500 jobs)
              </Typography>

              <div>
                {cardData.map((data, index) => (
                  <Box key={index} sx={{ minWidth: 275 }}>
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
                      <CardActionArea>
                        <CardContent>
                          <CardActions>
                            <div>
                              <Typography sx={{ fontSize: 20 }} gutterBottom>
                                {data.title}
                              </Typography>
                              <Typography
                                sx={{ mb: 1.5, color: "text.secondary" }}
                              >
                                {data.companyName}
                              </Typography>
                            </div>
                            <div style={{ marginLeft: "auto" }}>
                              <Avatar
                                sx={{
                                  backgroundColor: "orange",
                                }}
                                aria-label="companyname"
                              >
                                {data.companyName.substring(0, 2).toUpperCase()}
                              </Avatar>
                            </div>
                          </CardActions>

                          <Stack direction="row" spacing={1}>
                            <Chip
                              sx={{ backgroundColor: "white" }}
                              icon={<WorkIcon style={{ color: "#478CF7" }} />}
                              label={data.experience}
                            />
                            <Chip
                              sx={{ backgroundColor: "white" }}
                              icon={
                                <CurrencyRupeeIcon
                                  style={{ color: "#FFB300" }}
                                />
                              }
                              label={data.salary}
                            />
                            <Chip
                              sx={{ backgroundColor: "white" }}
                              icon={
                                <LocationOnIcon
                                  style={{ color: "blueviolet" }}
                                />
                              }
                              label={data.locations}
                            />
                          </Stack>
                          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                            <Chip
                              sx={{ backgroundColor: "white" }}
                              icon={
                                <DescriptionIcon
                                  style={{ color: "lightblue" }}
                                />
                              }
                              label={data.description}
                            />
                          </Stack>
                          <Typography sx={{ mt: 1.5 }} color="text.secondary">
                            {data.skills}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Typography sx={{ fontSize: "12px" }}>
                            {data.timestamp}
                          </Typography>
                          <Button sx={{ marginLeft: "auto" }} size="small">
                            <NavigationIcon />
                            Save
                          </Button>
                        </CardActions>
                      </CardActionArea>
                    </Card>
                  </Box>
                ))}
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={3}>
            <Item elevation={4}>
              <Card style={cardStyle} sx={{ backgroundColor: "#E6E6FA" }}>
                <CardContent style={contentStyle}>
                  <Typography variant="body1" color="text.secondary">
                    See 100+ jobs in Featured Companies
                  </Typography>
                </CardContent>

                <div style={iconContainerStyle}>
                  <div style={iconStyle}>
                    <FaAmazon style={{ color: "orange" }} />
                  </div>
                  <div style={iconStyle}>
                    <FaEbay />
                  </div>
                  <div style={iconStyle}>
                    <FaCcPaypal style={{ color: "dodgerblue" }} />
                  </div>
                  <div style={iconStyle}>
                    <FaCcStripe style={{ color: "blue" }} />
                  </div>
                  <div style={iconStyle}>
                    <FaCcVisa style={{ color: "#1434CB" }} />
                  </div>
                  <div style={iconStyle}>
                    <FaAws style={{ color: "orange" }} />
                  </div>
                  <div style={iconStyle}>
                    <FaFacebook style={{ color: "blue" }} />
                  </div>
                  <div style={iconStyle}>
                    <FaShopify style={{ color: "green" }} />
                  </div>
                  <div style={iconStyle}>
                    <FaSpotify style={{ color: "green" }} />
                  </div>
                  <div style={iconStyle}>
                    <FaTiktok style={{ color: "red" }} />
                  </div>
                  <div style={iconStyle}>
                    <FaTwitter style={{ color: "dodgerblue" }} />
                  </div>
                  <div style={iconStyle}>
                    <FaViber style={{ color: "violet" }} />
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
