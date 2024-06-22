import React from "react";
import { Box } from "@mui/material";
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
const Home = ({ statesData, settingFormData,cityData }) => {
  
  return (
    <Box className="home-container">
      <MessageNavbar />
      <HeroSection
        statesData={statesData}
        settingFormData={settingFormData}
        cityData={cityData}
      />
      <Crousel />
      <Specialization />
      <MedicalSpecialist />
      <PatientCaring />
      <LatestNews />
      <OurFamily />
      <AskFAQ />
      <MobDownload />
      <Footer />
    </Box>
  );
};

export default Home;
