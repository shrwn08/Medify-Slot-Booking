import React from "react";
import { Box, Button } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Banner from "../../Asset/banner-searched.png";
import HospitalIcon from "../../Asset/hospital-searched-result.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import "./searchedResultDp.css";

const SearchedResultDp = ({handleNavigationToDP2,hospitalData,formData,}) => {
  return (
    
    <div className="Searched-reasult-container">
      <Box className="Searched-reasult-sub-container">
        <Box className="show-no-result">
          <p className="searched-no-result">
            {hospitalData.length} medical centers available in {formData.state}
          </p>
          <Box className="search-info-container">
            <CheckCircleOutlineRoundedIcon />
            <p className="searched-info">
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </Box>
        </Box>
        <Box className="Searched-reasult-cards-banner-container">
          <Box className="Searched-reasult-cards-banner">
          { hospitalData.map(item=> (
            <Box className="Searched-reasult-cards" key={item['Provider ID']}>
              <Box className="Searched-reasult-cards-dtails">
                <Box className="Searched-reasult-hospital-details">
                  <Box className="Searched-reasult-hospital-conatiner">
                    <Box className="Searched-reasult-hospital">
                      <Box className="searched-checked">
                        <VerifiedSharpIcon
                          sx={{
                            height: "20px",
                            width: "20px",
                          }}
                        />
                      </Box>
                      <Box
                        className="HospitalIcon"
                        component="img"
                        src={HospitalIcon}
                      />
                    </Box>
                  </Box>
                  
                    <Box key ={item['Provider ID']} className="Searched-reasult-details">
                    <Box className="searched-result-hospital-name">
                      <p className="Hospital-name">
                        {item.Address}
                      </p>
                    </Box>
                    <Box className="searched-result-state-details-consultant">
                      <p className="resulted-state-city">{item.City}, {item.State}</p>
                      <p className="searched-result-details">
                        {item['Hospital Name']}
                      </p>
                      <p className="consultanant-result">
                        <span className="free">FREE </span>
                        <span className="five-hundred">₹500 </span>
                        Consultation fee at clinic
                      </p>
                    </Box>
                    <Box className="like-box-container">
                      <Box className="like-box">
                        <ThumbUpIcon sx={{
                          width : '14px',
                        }}
                        />
                        {item['Hospital overall rating']}
                      </Box>
                    </Box>
                  
                  </Box>
                  
                  
                  
                </Box>
              </Box>

              <Box className="Searched-reasult-available-btn">
                <p className="available">Available Today</p>
                <Button
                  className="book-free"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#FFFFFF",
                    backgroundColor: "#14BEF0",
                    border: "1px solid #14BEF0",
                  }}
                  onClick={handleNavigationToDP2}
                >
                  Book FREE Center Visit
                </Button>
              </Box>

            </Box>
          ))}
          </Box>
          <Box className="Searched-reasult-banner">
            <img
              className="Searched-reasult-banner-image"
              src={Banner}
              alt="BannerImage"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SearchedResultDp;
