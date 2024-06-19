import React from "react";
import { Box } from "@mui/material";
import Image1 from "../../Asset/crousel1.png";
import Image2 from "../../Asset/crousel2.png";
import Image3 from "../../Asset/crousel3.png";
import "./Crousel.css";

const Crousel = () => {
  return (
    <Box className="crousel-container">
      <Box className="crousel-images">
        <Box className="crousel-one">
          <img className="crousel-picture" src={Image1} alt="carousel1" />
        </Box>
        <Box className="crousel-one">
          <img className="crousel-picture" src={Image2} alt="carousel2" />
        </Box>
        <Box className="crousel-one">
          <img className="crousel-picture" src={Image3} alt="carousel3" />
        </Box>
      </Box>
      <Box className='dots'>
        <Box className='dot1'></Box>
        <Box className='dot2'>
            <Box className='dot4'></Box>
        </Box>
        <Box className='dot3'></Box>
      </Box>
    </Box>
  );
};

export default Crousel;
