import React from "react";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./my-booking.css";

const MyBooking = () => {
  return (
    <div className="myBooking-Dp3-container">
      <Box className="my-booking-blue-box">
        <Box className="my-booking-heading">My Bookings</Box>
        <Box className="my-booking-textField-container">
          <TextField
            sx={{
              width: "545px",
              height: "50px",
              borderRadius: "8px",
              border: "1px solid #F0F0F0",
              backgroundColor: "#FAFBFE",
            }}
            placeholder="Search by Hospital"
          />
          <Button
            sx={{
              backgroundColor: "#2AA8FF",
              width: "177px",
              height: "50px",
              borderRadius: "8px",
              color:'#ffff',
            }}
          >
            <SearchIcon />
            Search
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default MyBooking;
