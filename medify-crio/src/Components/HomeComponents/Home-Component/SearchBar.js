import React from "react";
import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DocIcon from '../../Asset/doc-icon.png'
import HospitalIcon from '../../Asset/hospital.png'
import LabIcon from '../../Asset/lab.png'
import MedStoreIcon from '../../Asset/medical-store.png'
import AmbulanceIcon from '../../Asset/ambulance.png'
import "./searchrac.css";

const SearchBar = () => {
  return (
    <Box className="SearchBar-containers">
      <Box className="search-state-city">
        <TextField
          sx={{
            width: "285px",
            height: "50px",
            borderRadius: "8px",
            border: "1px",
            
          }}
            placeholder='State'
        />
        <TextField
          sx={{
            width: "285px",
            height: "50px",
            borderRadius: "8px",
            border: "1px",
          }}
          placeholder='City'
        />
        <Button
          sx={{
            width: "121px",
            height: "50px",
            color: "#FFFFFF",
            backgroundColor: "#2AA8FF",
            borderRadius: "8px",
          }}
        >
          <SearchIcon />
          Search
        </Button>
      </Box>
      <p className='looking-text'>You may be looking for</p>
      <Box className='cards-search'>
      <Box className='cards'>
        <img className="doc-Icon" src={DocIcon} alt="doc-icon"/>
        Doctors
      </Box>
      <Box className='cards'>
        <img className="lab-Icon" src={LabIcon} alt="lab-icon"/>
        Labs
      </Box>
      <Box className='cards'>
        <img className="hospital-Icon" src={HospitalIcon} alt="hospital-icon"/>
        Hospital
      </Box>
      <Box className='cards'>
        <img className="medical-store-icon" src={MedStoreIcon } alt="medical-store-icon"/>
       Medical Store
      </Box>
      <Box className='cards'>
        <img className="ambulance-Icon" src={AmbulanceIcon} alt="ambulance-icon"/>
        Ambulance
      </Box>

      </Box>
    </Box>
  );
};

export default SearchBar;
