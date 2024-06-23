import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DocIcon from "../../Asset/doc-icon.png";
import HospitalIcon from "../../Asset/hospital.png";
import LabIcon from "../../Asset/lab.png";
import MedStoreIcon from "../../Asset/medical-store.png";
import AmbulanceIcon from "../../Asset/ambulance.png";
import "./searchrac.css";

const SearchBar = ({
  statesData,
  citiesData,
  settingFormData,
  handleNavigationToDP1,
}) => {
  const [stateValue, setStateValue] = useState("");
  const [cityValue, setCityValue] = useState("");

  useEffect(() => {
    settingFormData({
      state: stateValue,
      city: cityValue,
    });
  }, [stateValue, cityValue, settingFormData]);

  const handleStateChange = (event) => {
    setStateValue(event.target.value);
  };

  const handleCityChange = (event) => {
    setCityValue(event.target.value);
  };

  const renderStateOptions = () => {
    if (!statesData) {
      return <CircularProgress />;
    }

    return statesData.map((option, index) => (
      <MenuItem key={index} value={option}>
        {option}
      </MenuItem>
    ));
  };

  const renderCityOptions = () => {
    if (!citiesData) {
      return <CircularProgress />;
    }

    return citiesData.map((option, index) => (
      <MenuItem key={index} value={option}>
        {option}
      </MenuItem>
    ));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNavigationToDP1();
  };

  return (
    <Box className="SearchBar-containers">
      <form onSubmit={handleSubmit}>
        <Box className="search-state-city">
          <TextField
            select
            value={stateValue}
            onChange={handleStateChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              width: "285px",
              height: "50px",
              borderRadius: "8px",
              border: "1px",
            }}
            placeholder="State"
          >
            {renderStateOptions()}
          </TextField>

          <TextField
            select
            value={cityValue}
            onChange={handleCityChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              width: "285px",
              height: "50px",
              borderRadius: "8px",
              border: "1px",
            }}
            placeholder="City"
          >
            {renderCityOptions()}
          </TextField>

          <Button
            sx={{
              width: "121px",
              height: "50px",
              color: "#FFFFFF",
              backgroundColor: "#2AA8FF",
              borderRadius: "8px",
            }}
            type="Submit"
          >
            <SearchIcon />
            Search
          </Button>
        </Box>
      </form>
      <p className="looking-text">You may be looking for</p>
      <Box className="cards-search">
        <Box className="cards-searchbar">
          <img className="doc-Icon" src={DocIcon} alt="doc-icon" />
          Doctors
        </Box>
        <Box className="cards-searchbar">
          <img className="lab-Icon" src={LabIcon} alt="lab-icon" />
          Labs
        </Box>
        <Box className="cards-searchbar">
          <img
            className="hospital-Icon"
            src={HospitalIcon}
            alt="hospital-icon"
          />
          Hospital
        </Box>
        <Box className="cards-searchbar">
          <img
            className="medical-store-icon"
            src={MedStoreIcon}
            alt="medical-store-icon"
          />
          Medical Store
        </Box>
        <Box className="cards-searchbar">
          <img
            className="ambulance-Icon"
            src={AmbulanceIcon}
            alt="ambulance-icon"
          />
          Ambulance
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
