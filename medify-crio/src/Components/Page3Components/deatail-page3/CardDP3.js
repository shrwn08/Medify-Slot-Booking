import React from "react";
import { Box, Button } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Banner from "../../Asset/banner-searched.png";
import HospitalIcon from "../../Asset/hospital-searched-result.png";
import "./card-dp3.css";

const CardDP3 = () => {
  return (
    <div className="CardDP3-Booking-container">
      <Box className="CardDp2-banner-timing-appointment">
        <Box className="searched-result-card-banner">
          <Box className="searched-result-card-container">
            <Box className="searched-result-card">
              <Box className="search-result-card-box">
                <Box className="Searched-result-hospital-icon">
                  <img
                    className="result-hospital-icon"
                    src={HospitalIcon}
                    alt="hospital-icon"
                  />
                </Box>
                <Box className="Searched-result-Details">
                  <p className="Searched-result-Details-heading">
                    Fortis Hospital Richmond Road
                  </p>
                  <p className="Searched-result-city-state">
                    Bangalore, Karnataka
                  </p>
                  <p className="Searched-result-mini-details">
                    Smilessence Center for Advanced Dentistry + 1 more
                  </p>
                </Box>
                <Box className="Searched-result-Booking-available-div">
                  <Box className="Searched-result-Booking-available" sx={{
                    display:'flex',
                  }}>
                    <Button className="CardDP3-time-available" sx={{
                         width: "84px",
                        height: "31.59px",
                        borderRadius: "3px ",
                        border: "1px solid #00A500",
                        backgroundColor: "#ffff",
                        color: "#00A500",
                        fontFamily: "Lato",
                        fontSize: "14px",
                        fontWeight: "700",
                    }}>10:30 AM</Button>
                    <Button
                      className="Searched-result-Booking"
                      sx={{
                        height: "32px",
                        borderRadius: "3px ",
                        border: "1px solid #00A500",
                        backgroundColor: "#ffff",
                        color: "#00A500",
                        fontFamily: "Lato",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      20 may 2024
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="banner-card">
          <img className="banner-card-image" src={Banner} alt="banner" />
        </Box>
      </Box>
    </div>
  );
};

export default CardDP3;
