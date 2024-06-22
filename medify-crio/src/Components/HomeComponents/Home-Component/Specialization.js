import React from "react";
import { Box, Button } from "@mui/material";
import Dentistry  from '../../Asset/lab.png'
import PrimaryCare from '../../Asset/primary-care.png'
import Cardiology from '../../Asset/Cardiology.png'
import MRI from '../../Asset/MRI.png'
import BloodTest from '../../Asset/Blood-test.png'
import Piscologist from '../../Asset/Piscologist.png'
import XRay from '../../Asset/x-ray.png'
import "./specialisation.css";

const Specialization = () => {
  return (
    <Box className="Specialization-containter">
      <Box className="text-card-btn">
        <Box className="Specialization-text">Find by specialisation</Box>
        <Box className="Specialization-cards">
          <Box className="special-card">
            <img className="cardImg" src={Dentistry} alt="Denstistry"/>
            Dentistry
          </Box>
          <Box className="special-card">
            <img className="cardImg" src={PrimaryCare} alt="Primary Care" />
            Primary Care
          </Box>
          <Box className="special-card">
            <img className="cardImg" src={Cardiology} alt="Cardiology"/>
            Cardiology
          </Box>
          <Box className="special-card">
            <img className="cardImg"  src={MRI} alt="MRI Resonance"/>
            MRI Resonance
          </Box>
          <Box className="special-card">
            <img className="cardImg"  src={BloodTest} alt="Blood Test"/>
            Blood Test
          </Box>
          <Box className="special-card">
            <img className="cardImg" src={Piscologist} alt="Piscologist"/>
            Piscologist
          </Box>
          <Box className="special-card">
            <img className="cardImg" src={Dentistry} alt="Laboratory"/>
            Laboratory
          </Box>
          <Box className="special-card">
            <img className="cardImg" src={XRay} alt="X-Ray" />
            X-Ray
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
