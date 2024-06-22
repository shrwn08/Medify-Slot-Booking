import React from "react";
import { Box, Button } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Banner from "../../Asset/banner-searched.png";
import HospitalIcon from "../../Asset/hospital-searched-result.png";
import "./searchedDp.css";

const SearchedDp = () => {
  return (
    <div className="Searched-reasult-container">
      <Box className="Searched-reasult-sub-container">
        <Box className="show-no-result">
          <p className="searched-no-result">
            15 medical centers available in Alaska
          </p>
          <Box className="search-info-container">
            <CheckCircleOutlineRoundedIcon />
            <p className="searched-info">
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </Box>
        </Box>
        <Box className="searched-result-card-banner">
          <Box className="searched-result-card-container">
            <Box className="searched-result-card">
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
                  Banglore, Karnataka
                </p>
                <p className="Searched-result-mini-details">
                  Smilessence Center for Advanced Dentistry + 1 more
                </p>
                <p className="Searched-result-Discount-details">
                  <span className="Searched-result-free">Free </span>
                  <span className="Searched-result-previous-price">₹500 </span>
                  Consultation fee at clinic
                </p>
              </Box>
              <Box className="Searched-result-Booking-available-div">
                <Box className="Searched-result-Booking-available">
                  <p className="Searched-result-available">Available Today</p>
                  <Button
                    className="Searched-result-Booking"
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: "500",
                      borderRadius: " 4px",
                      color: "#FFFFFF",
                      border: "1px solid #14BEF0",
                      backgroundColor: "#2AA7FF",
                    }}
                  >
                    Book FREE Center Visit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="banner-card">
            <img className="banner-card-image" src={Banner} alt="banner" />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SearchedDp;
