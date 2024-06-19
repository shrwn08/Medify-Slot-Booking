import React from "react";
import { Box, Button } from "@mui/material";
import Doctors from '../../Asset/doctors.png'
import "./hero-section.css";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <Box className="hero-container">
      <Box className="Text-hero-btn-container">
        <Box className="text-hero-btn">
          <Box className="text-hero">
            Skip the travel! Find Online <br />
            <span className="medical-text">Medical </span>
            <span className="centers-text">Centers</span>
          </Box>
          <Box className="long-text">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </Box>
          <Box className="find-center-btn">
            <Button
              sx={{
                width: "177px",
                height: "48px",
                gap: "10px",
                borderRadius: "8px",
                backgroundColor:' #2AA8FF',
                color:'#FFFFFF',
              }}
            >Find Centers</Button>
          </Box>
        </Box>
        <Box className="hero-image">
            <img className="doctors-image-hero" src={Doctors} alt="doctorImage"/>
        </Box>
      </Box>
      <Box className='search-box'>
      <SearchBar />
      </Box>
      
    </Box>
  );
};

export default HeroSection;
