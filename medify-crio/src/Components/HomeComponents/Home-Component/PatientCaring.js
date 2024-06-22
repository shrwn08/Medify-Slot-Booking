import React from "react";
import { Box } from "@mui/material";
import PhoneIcon from '../../Asset/PhoneIcon.png'
import DP1 from '../../Asset/doctor-patient1.png'
import DP2 from '../../Asset/doctor-patient2.png'
import checkBullet from '../../Asset/check.png'
import "./PatientCaring.css";

const PatientCaring = () => {
  return (
    <div className="Patient-Caring-container">
      <Box className="patient-caring-subContainer">
        <Box className="patient-caring-image-text">
          <Box className="consulation-box">
            <Box className="call-icon-text">
                <img className="call-icon" src={PhoneIcon} alt='phone-icon'/>
                <Box className='free-text'>
                Free Consultation
                </Box>
                
            </Box>
            
            <Box className="consultation-text">Consultation with the best</Box>
          </Box>
          <Box className='doctor-patient-image2-container'>
                <img className="doctor-patient-image" src={DP2} alt='image2'/>
            </Box>
            <Box className='doctor-patient-image1-container'>
<img className="doctor-patient-image" src={DP1} alt='image1'/>
            </Box>
        </Box>
        <Box className='caring-goodwill'>
            <p className="caring-heading">
            HELPING PATIENTS FROM AROUND THE GLOBE!!
            </p>
            <p className="patient-caring">
            <span className="patient-text">Patient </span><span className="caring-text">Caring</span>
            </p>
            <p className="caring-long-text">
            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
            </p>
            <Box className='list-checked'>
                <Box className='list'>
                    <img className="check-bullet" src={checkBullet} alt="bullet"/>
                    <p className="list-checked-text">Stay Updated About Your Health</p>
                </Box>
                <Box className='list'>
                    <img className="check-bullet" src={checkBullet} alt="bullet"/>
                    <p className="list-checked-text">Check Your Results Online</p>
                </Box>
                <Box className='list'>
                    <img className="check-bullet" src={checkBullet} alt="bullet"/>
                    <p className="list-checked-text">Manage Your Appointments</p>
                </Box>
            </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PatientCaring;
