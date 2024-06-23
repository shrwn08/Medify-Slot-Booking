import React from "react";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./searchbar-dp.css";

const SearchBarDP = () => {
  const handleOnSubmitDP = (event) =>{
    event.preventDefault();
  }
  return (
    <div className="searchDP-container">
      <form onSubmit={handleOnSubmitDP}>
        <Box className="searchbarDp-cub-container">
          <TextField
            className="searchDP-state"
            fullWidth
            sx={{
              width: "326px",
              height: "50px",
              border: "1px solid #F0F0F0",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
            placeholder="State"
          />
          <TextField
            className="searchDP-city"
            fullWidth
            sx={{
              width: "522px",
              height: "50px",
              border: "1px solid #F0F0F0",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Cities"
          />
          <Button
            sx={{
              width: "231px",
              height: "50px",
              borderRadius: "8px",
              backgroundColor: "#2AA8FF",
              color: "#fff",
            }}
            type="submit"
          >

            <SearchIcon /> Search
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default SearchBarDP;
