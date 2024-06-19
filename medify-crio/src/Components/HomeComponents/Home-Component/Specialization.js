import React from "react";
import { Box, Button } from "@mui/material";
import "./specialisation.css";

const Specialization = () => {
  return (
    <Box className="Specialization-containter">
      <Box className="text-card-btn">
        <Box className="Specialization-text">Find by specialisation</Box>
        <Box className="Specialization-cards">
          <Box className="special-card">
            <img />
            Dentistry
          </Box>
          <Box className="special-card">
            <img />
            Dentistry
          </Box>
          <Box className="special-card">
            <img />
            Dentistry
          </Box>
          <Box className="special-card">
            <img />
            Dentistry
          </Box>
          <Box className="special-card">
            <img />
            Dentistry
          </Box>
          <Box className="special-card">
            <img />
            Dentistry
          </Box>
          <Box className="special-card">
            <img />
            Dentistry
          </Box>
          <Box className="special-card">
            <img />
            Dentistry
          </Box>
        </Box>
        <Box className="viewAll-btn">
          <Button
            sx={{
                marginTop:'30px',
              width: "147px",
              height: "50px",
              borderRadius: "8px",
              backgroundColor:'#2AA8FF',
              color:"#ffff",
            }}
          >
            View All
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Specialization;
