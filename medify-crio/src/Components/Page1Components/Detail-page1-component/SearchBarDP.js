import React from "react";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./searchbar-dp.css";

const SearchBarDP = () => {
  return (
    <div className="searchDP-container">
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
        >
          <SearchIcon /> Search
        </Button>
      </Box>
    </div>
  );
};

export default SearchBarDP;
