import React from "react";
import { Box } from "@mui/material";
import HPicon from "../../Asset/happy-patient-icon.png";
import Hospital from "../../Asset/our-family-hospital.png";
import Lab from "../../Asset/our-family-lab.png";
import ExpertDoctor from '../../Asset/our-family-doctor.png'
import "./our-family.css";

const OurFamily = () => {
  return (
    <div className="our-family-container">
      <Box className="our-family">
        <Box className="our-family-box">
          <Box className="our-family-box-sub">
            <p className="caring-for-heath">
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </p>
            <p className="our-family-heading">Our Families</p>
            <p className="our-family-paragraph">
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </p>
          </Box>
        </Box>
        <Box className="our-family-cards-container">
          <Box className="Happy-Patients-Hospitals">
            <Box className="our-family-Happy-Patients">
              <img className="ofhp-image" src={HPicon} alt="happy-patient" />
              <Box className="ofhp-count">5000+</Box>
              <Box className="ofhp-text">Happy Patients</Box>
            </Box>
            <Box className="our-family-Hospitals">
              <img className="ofhp-image" src={Hospital} alt="Hospital-icon" />
              <Box className="ofhp-count">200+</Box>
              <Box className="ofhp-text">Hospitals</Box>
            </Box>
          </Box>

          <Box className="Laboratories-Expert-Doctors">
            <Box className="our-family-Laboratories">
              <img className="ofhp-image" src={Lab} alt="Lab-icon" />
              <Box className="ofhp-count">1000+</Box>
              <Box className="ofhp-text">Laboratories</Box>
            </Box>
            <Box className="our-family-Expert-Doctors">
            <img className="ofhp-image" src={ExpertDoctor} alt="Lab-icon" />
              <Box className="ofhp-count">700+</Box>
              <Box className="ofhp-text">Expert Doctors</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default OurFamily;
