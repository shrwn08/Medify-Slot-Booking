import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../CommomComponents/Footer";
import MobDownload from "../CommomComponents/MobDownload";
import AskFAQ from "../CommomComponents/AskFAQ";
import MessageNavbar from "../CommomComponents/MessageNavbar";
import HeroSection from "./Home-Component/HeroSection";

import "./home.css";
import Crousel from "./Home-Component/Crousel";
import Specialization from "./Home-Component/Specialization";
import MedicalSpecialist from "./Home-Component/MedicalSpecialist";
import PatientCaring from "./Home-Component/PatientCaring";
import LatestNews from "./Home-Component/LatestNews";
import OurFamily from "./Home-Component/OurFamily";
const Home = ({ statesData, settingFormData,citiesData }) => {
  const navigate = useNavigate();

  const handleNavigationToDP1 = () => {
    navigate("/detailpage1");
  };
  
  return (
    <Box className="home-container">
      <HeroSection
        statesData={statesData}
        settingFormData={settingFormData}
        citiesData={citiesData}
        handleNavigationToDP1={handleNavigationToDP1}
      />
      <Crousel />
      <Specialization />
      <MedicalSpecialist />
      <PatientCaring />
      <LatestNews />
      <OurFamily />
      <AskFAQ />
    </Box>
  );
};

export default Home;
