import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./Components/HomeComponents/Home";
import MobDownload from "./Components/CommomComponents/MobDownload";
import Footer from "./Components/CommomComponents/Footer";
import DetailPage1 from "./Components/Page1Components/DetailPage1";
import DetailPage2 from "./Components/Page2Components/DetailPage2";
import DetailPage3 from "./Components/Page3Components/DetailPage3";
import MessageNavbar from "./Components/CommomComponents/MessageNavbar";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const App = () => {
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
  });
  const [hospitalData,setHospitalData] = useState([]);

  const fetchStates = async () => {
    try {
      const stateResponse = await axios.get(
        "https://meddata-backend.onrender.com/states"
      );
      setStateData(stateResponse.data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCities = async (state) => {
    if (!state) return;
    try {
      const cityResponse = await axios.get(
        `https://meddata-backend.onrender.com/cities/${state}`
      );
      setCityData(cityResponse.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const fetchHospitals = async (state,city) => {
    if (!state && !city ) return;
    try {
      const hospitalResponse = await axios.get(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      );
      console.log(hospitalResponse.data)
      setHospitalData(hospitalResponse.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };




  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchCities(formData.state);
  }, [formData.state]);

  useEffect(() => {
    fetchHospitals(formData.state,formData.city);
  }, [formData.state,formData.city]);

  console.log(formData);
  return (
    <div>
      <MessageNavbar />
      
      
        <Routes>
          <Route
            path="/"
            element={
              <Home
                statesData={stateData}
                citiesData={cityData}
                settingFormData={setFormData}
                
              />
            }
          />
          <Route path="/detailPage1"
          element={
            <DetailPage1 />
          }
          />
          <Route path="/detailPage2"
            element={
              <DetailPage2 />
            }
          />
          <Route path="/detailPage3"
            element={
              <DetailPage3 />
            }
          />
        </Routes>

      {/* <DetailPage1/> */}
      {/* <DetailPage2 /> */}
      {/* <DetailPage3 /> */}
      <MobDownload />
      <Footer />
    </div>
  );
};

export default App;
