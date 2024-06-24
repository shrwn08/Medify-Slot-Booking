import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Banner from "../../Asset/banner-searched.png";
import HospitalIcon from "../../Asset/hospital-searched-result.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import "./resulted-card.css";
import TimeDatePicker from "./TimeDatePicker";

const ResultedCard = ({
  hospitalData,
  formData,
  booking,
  setBooking,
  setHospitalDetail,
  handleBookingData,
}) => {
  const [showDatePickerIndex, setShowDatePickerIndex] = useState(null);

  if (!hospitalData) {
    return "";
  }

  return (
    <div className="DP2-Searched-reasult-container">
      <Box className="DP2-Searched-reasult-sub-container">
        <Box className="DP2-show-no-result">
          <p className="DP2-searched-no-result">
            {hospitalData.length} medical centers available in {formData.state}
          </p>
          <Box className="DP2-search-info-container">
            <CheckCircleOutlineRoundedIcon />
            <p className="DP2-searched-info">
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </Box>
        </Box>
        <Box className="DP2-Searched-reasult-cards-banner-container">
          <Box className="DP2-Searched-reasult-cards-banner">
            {hospitalData.map((item, index) => (
              <Box className="btn-card-container" key={item["Provider ID"]}>
                <Box className="DP2-Searched-reasult-cards">
                  <Box className="DP2-Searched-reasult-cards-details">
                    <Box className="DP2-Searched-reasult-hospital-details">
                      <Box className="DP2-Searched-reasult-hospital-conatiner">
                        <Box className="DP2-Searched-reasult-hospital">
                          <Box className="DP2-searched-checked">
                            <VerifiedSharpIcon
                              sx={{
                                height: "20px",
                                width: "20px",
                              }}
                            />
                          </Box>
                          <Box
                            className="DP2-HospitalIcon"
                            component="img"
                            src={HospitalIcon}
                          />
                        </Box>
                      </Box>
                      <Box
                        key={item["Provider ID"]}
                        className="DP2-Searched-reasult-details"
                      >
                        <Box className="DP2-searched-result-hospital-name">
                          <p className="DP2-Hospital-name">{item.Address}</p>
                        </Box>
                        <Box className="DP2-searched-result-state-details-consultant">
                          <p className="DP2-resulted-state-city">
                            {item.City}, {item.State}
                          </p>
                          <p className="DP2-searched-result-details">
                            {item["Hospital Name"]}
                          </p>
                          <p className="DP2-consultanant-result">
                            <span className="DP2-free">FREE </span>
                            <span className="DP2-five-hundred">₹500 </span>
                            Consultation fee at clinic
                          </p>
                        </Box>
                        <Box className="DP2-like-box-container">
                          <Box className="DP2-like-box">
                            <ThumbUpIcon
                              sx={{
                                width: "14px",
                              }}
                            />
                            {item["Hospital overall rating"]}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="DP2-Searched-reasult-available-btn">
                      <p className="DP2-available">Available Today</p>
                      <Button
                        className="DP2-book-free"
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#FFFFFF",
                          backgroundColor: "#14BEF0",
                          border: "1px solid #14BEF0",
                        }}
                        onClick={() => {
                          if (showDatePickerIndex === index) {
                            setShowDatePickerIndex(null);
                          } else {
                            setShowDatePickerIndex(index);
                            setHospitalDetail((prevDetail) => ({
                              ...prevDetail,
                              hospitalName: item["Hospital Name"],
                              hospitalAddress: item.Address,
                              state: formData.state,
                              city: formData.city,
                              rating: item["Hospital overall rating"],
                            }));
                          }
                        }}
                      >
                        Book FREE Center Visit
                      </Button>
                    </Box>
                  </Box>
                  <Box>
                    {showDatePickerIndex === index && (
                      <TimeDatePicker
                        booking={booking}
                        setBooking={setBooking}
                        setHospitalDetail={setHospitalDetail}
                        handleBookingData={handleBookingData}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="DP2-Searched-reasult-banner">
            <img
              className="DP2-Searched-reasult-banner-image"
              src={Banner}
              alt="BannerImage"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ResultedCard;
