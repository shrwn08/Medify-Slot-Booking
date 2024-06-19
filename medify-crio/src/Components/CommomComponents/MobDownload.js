import React from "react";
import { Box, Button } from "@mui/material";
import Image1 from "../Asset/mobile1.png";
import MobileFrame from "../Asset/mobile-frame.png";
import Image2 from "../Asset/mobile1.png";
import Arrow from "../Asset/arrow.png";
import Android from '../Asset/android-btn.png'
import Apple from '../Asset/apple-btn.png'
import "./mob-down.css";
const MobDownload = () => {
  return (
    <Box className="mob-down-container">
      <Box className="mob-download">
        <Box className="mob-img">
          <Box className="image1-frame1">
            <img className="image1-mob" src={Image1} alt="mobile" />
            <img className="frame1-mob" src={MobileFrame} alt="mobileFrame" />
          </Box>
          <Box className="image2-frame2">
            <img className="image2-mob" src={Image2} alt="mobile" />
            <img className="frame2-mob" src={MobileFrame} alt="mobileFrame" />
          </Box>
        </Box>
        <Box className="text-symbol">
          <Box className="Symbol">
            <img className="symbol-img" src={Arrow} alt="arrow" />
          </Box>
          <Box className="text-mob-app">
            <Box className="download-heading">
              Download the <br/><span className="medify-span">Medify</span> App
            </Box>
            <Box className="get-link-text">
              Get the link to download the app
            </Box>
            <Box className="input-btn">
            <input type="button" className="country-code" value="+91" />
            <input placeholder="Enter phone number" className="phone-no" />
            <Button
              sx={{
                width: "121px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: '#2AA8FF',
                color  : '#ffff',
                marginLeft:'20px',
              }}
            >
              Send SMS
            </Button>
          </Box>
          <Box className="android-apple-btn">
            <img className="android-btn" src={Android} alt="android-btn"/>
            <img className="apple-btn" src={Apple} alt="apple-btn"/>
          </Box>
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default MobDownload;
