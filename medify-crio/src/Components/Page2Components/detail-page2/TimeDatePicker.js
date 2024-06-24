import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./date-time-picker.css";
import { useNavigate } from "react-router-dom";

const getNextDates = (days) => {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < days; i++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + i);
    dates.push({
      date: futureDate.toDateString(),
    });
  }
  return dates;
};

const newDateData = () => {
  return {
    date: getNextDates(7),
  };
};

const TimeDatePicker = ({ booking, setBooking, setHospitalDetail, handleBookingData }) => {
  const [dateData, setDateData] = useState([]);
  const [bookingSlot, setBookingSlot] = useState(20);
  const navigationToPage3 = useNavigate();

  useEffect(() => {
    const fetchDateData = () => {
      const data = newDateData();
      setDateData(data.date);
      console.log(data.date);
    };
    fetchDateData();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 1,
  };

  return (
    <div className="Date-time-carousel-container">
      <Box className="date-time-carousel-sub-container">
        <Box className="dateTimeCarousel">
          <Slider {...settings} className="slider-btn">
            {dateData.map((date, index) => (
              <Box key={index} className="date-box">
                <button
                  type="button"
                  className="date-btn"
                  onClick={() => setHospitalDetail((prevDetail) => ({
                    ...prevDetail,
                    bookDate: date.date,
                  }))}
                >
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: '#414146',
                    }}
                  >
                    {date.date}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#01A400",
                    }}
                  >
                    {bookingSlot - booking} Slots Available
                  </Typography>
                </button>
              </Box>
            ))}
          </Slider>
        </Box>
        <Box className="appointment-time-container">
          <Box className="Morning-time-Container">
            <Typography className="Morning-time">Morning</Typography>
            <Box className="morning-btn">
              <Button
                sx={{
                  width: "84px",
                  height: "31.59px",
                  borderRadius: "3px",
                  border: "1px solid #2AA7FF",
                  color: "#2AA7FF",
                  fontFamily: "Lato",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
                onClick={() => {
                  setHospitalDetail((prevDetail) => ({
                    ...prevDetail,
                    bookTime: '11:30 AM',
                  }));
                  handleBookingData();
                  setBooking((prev) => prev + 1);
                  navigationToPage3('/detailPage3');
                }}
              >
                11:30 AM
              </Button>
            </Box>
          </Box>
          <Box className="Afternoon-time-Container">
            <Typography className="afternoon-time">Afternoon</Typography>
            <Box className="afternoon-btn">
              {[
                "12:00 PM",
                "12:30 PM",
                "01:00 PM",
                "01:30 PM",
                "02:00 PM",
                "02:30 PM",
              ].map((time, index) => (
                <Button
                  key={index}
                  sx={{
                    width: "84px",
                    height: "31.59px",
                    borderRadius: "3px",
                    border: "1px solid #2AA7FF",
                    color: "#2AA7FF",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontWeight: "400",
                    marginRight: "15px",
                  }}
                  onClick={() => {
                    setHospitalDetail((prevDetail) => ({
                      ...prevDetail,
                      bookTime: time,
                    }));
                    handleBookingData();
                    setBooking((prev) => prev + 1);
                    navigationToPage3('/detailPage3');
                  }}
                >
                  {time}
                </Button>
              ))}
            </Box>
          </Box>
          <Box className="Evening-time-Container">
            <Typography className="evening-time">Evening</Typography>
            <Box className="evening-btn">
              {["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"].map(
                (time, index) => (
                  <Button
                    key={index}
                    sx={{
                      width: "84px",
                      height: "31.59px",
                      borderRadius: "3px",
                      border: "1px solid #2AA7FF",
                      color: "#2AA7FF",
                      fontFamily: "Lato",
                      fontSize: "14px",
                      fontWeight: "400",
                      marginRight: "15px",
                    }}
                    onClick={() => {
                      setHospitalDetail((prevDetail) => ({
                        ...prevDetail,
                        bookTime: time,
                      }));
                      handleBookingData();
                      setBooking((prev) => prev + 1);
                      navigationToPage3('/detailPage3');
                    }}
                  >
                    {time}
                  </Button>
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TimeDatePicker;
