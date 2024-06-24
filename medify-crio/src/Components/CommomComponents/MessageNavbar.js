import React from "react";
import { Box, Button } from "@mui/material";
import MedifyLogo from "../Asset/medify-logo.png";
import "./msg-alert.css";

const MessageNavbar = ({handleNavigationToHomePage}) => {
  return (
    <Box className="msgNav">
      <Box className="message-alert-container">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </Box>
      <Box className='nav-links-btn-container'>
      <Box className="navbar-container">
        <Button className="logo" type='button' onClick={handleNavigationToHomePage}>
          <img src={MedifyLogo} alt="medify" className="logo-img" />
        </Button>
        
        <Box className="nav-links-button">
          <Box className="nav-links">
            <Box className="navElement">Find Doctors</Box>
            <Box className="navElement">Hospitals</Box>
            <Box className="navElement">Medicines</Box>
            <Box className="navElement">Surgeries</Box>
            <Box className="navElement">Software for Provider</Box>
            <Box className="navElement">Facilities</Box>
          </Box>

          <Button
            className="booking-btn"
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "0.02em",
              backgroundColor: "#2AA8FF",
              color: "#FFFFFF",
            }}
          >
            My Bookings
          </Button>
        </Box>
        </Box>
        
      </Box>
    </Box>
  );
};

export default MessageNavbar;
