import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Banner from "../../Asset/banner-searched.png";
import HospitalIcon from "../../Asset/hospital-searched-result.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import './card-dp3.css'

const CardDP3 = ({ bookingCardsData }) => {
  if(!bookingCardsData){
    return <div className="no-data">Loading...</div>
  }
  return (
    <div className="DP3-Searched-reasult-container">
      <Box className="DP3-Searched-reasult-sub-container">
        
        <Box className="DP3-Searched-reasult-cards-banner-container">
          <Box className="DP3-Searched-reasult-cards-banner">
            {bookingCardsData.map((item,index) => (
              <Box className="DP3-btn-card-container" key={index}>
                <Box className="DP3-Searched-reasult-cards">
                  <Box className="DP3-Searched-reasult-cards-details">
                    <Box className="DP3-Searched-reasult-hospital-details">
                      <Box className="DP3-Searched-reasult-hospital-conatiner">
                        <Box className="DP3-Searched-reasult-hospital">
                          <Box className="DP3-searched-checked">
                            <VerifiedSharpIcon
                              sx={{
                                height: "20px",
                                width: "20px",
                              }}
                            />
                          </Box>
                          <Box
                            className="DP3-HospitalIcon"
                            component="img"
                            src={HospitalIcon}
                          />
                        </Box>
                      </Box>
                      {/**
                       hospitalName: '',
    hospitalAddress: '',
    state: '',
    city: '',
    rating: '',
    bookTime: '',
    bookDate: ''
                       */}
                      <Box
                        key={index}
                        className="DP3-Searched-reasult-details"
                      >
                        <Box className="DP3-searched-result-hospital-name">
                          <p className="DP3-Hospital-name">{item.hospitalAddress}</p>
                        </Box>
                        <Box className="DP3-searched-result-state-details-consultant">
                          <p className="DP3-resulted-state-city">
                            {item.city}, {item.state}
                          </p>
                          <p className="DP3-searched-result-details">
                            {item.hospitalName}
                          </p>
                         
                        </Box>
                        <Box className="DP3-like-box-container">
                          <Box className="DP3-like-box">
                            <ThumbUpIcon
                              sx={{
                                width: "14px",
                              }}
                            />
                            {item.rating}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="DP3-time-date-container">
                      <Box className="DP3-time">{item.bookTime}</Box>
                      <Box
                        className="DP3-date"
                       
                      >
                        {item.bookDate}
                      </Box>
                    </Box>
                  </Box>
                  <Box></Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="DP3-Searched-reasult-banner">
            <img
              className="DP3-Searched-reasult-banner-image"
              src={Banner}
              alt="BannerImage"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CardDP3;
