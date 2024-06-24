import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./my-booking.css";

const MyBooking = ({ bookingCardsData = [] }) => {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    checkHospital();
  };

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const checkHospital = () => {
    const lowerCaseValue = value.toLowerCase();
    for (let i = 0; i < bookingCardsData.length; i++) {
      if (bookingCardsData[i].hospitaName.toLowerCase() === lowerCaseValue) {
        setSearchResult(bookingCardsData[i]);
        return;
      }
    }
    setSearchResult(null);
  };

  return (
    <div className="myBooking-Dp3-container">
      <Box className="my-booking-blue-box">
        <Box className="my-booking-heading">My Bookings</Box>
        <form onSubmit={handleOnSubmit}>
          <Box className="my-booking-textField-container">
            <TextField
              sx={{
                width: "545px",
                height: "50px",
                borderRadius: "8px",
                border: "1px solid #F0F0F0",
                backgroundColor: "#FAFBFE",
              }}
              value={value}
              onChange={handleOnChange}
              placeholder="Search by Hospital"
            />
            <Button
              type="submit"
              sx={{
                backgroundColor: "#2AA8FF",
                width: "177px",
                height: "50px",
                borderRadius: "8px",
                color: "#fff",
                marginLeft: "10px",
              }}
            >
              <SearchIcon />
              Search
            </Button>
          </Box>
        </form>
      </Box>
      {searchResult && (
        <Box className="search-result-container">
          <div>
            <h3>{searchResult.hospitaName}</h3>
            <p>Address: {searchResult.hospitalAddress}</p>
            <p>State: {searchResult.state}</p>
            <p>City: {searchResult.city}</p>
            <p>Rating: {searchResult.rating}</p>
            <p>Booking Date: {searchResult.BookDate}</p>
            <p>Booking Time: {searchResult.BookTime}</p>
          </div>
        </Box>
      )}
    </div>
  );
};

export default MyBooking;
