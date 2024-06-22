import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./Components/HomeComponents/Home";
import DetailPage1 from "./Components/Page1Components/DetailPage1";
import DetailPage2 from "./Components/Page2Components/DetailPage2";
import DetailPage3 from "./Components/Page3Components/DetailPage3";

const App = () => {
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [formData, setformData] = useState({
    state: "",
    city: "",
  });

  const fetchStates = async () => {
    const stateResponse = await axios.get(
      "https://meddata-backend.onrender.com/states"
    );
    // console.log(stateResponse.data) //
    setStateData(stateResponse.data);
  };

  const fetchCities = async () => {
    const cityResponse = await axios.get(
      `https://meddata-backend.onrender.com/cities/${formData.state}`
    );
    // console.log(citiesResponse.data);
    setCityData(cityResponse.data);
  };

  useEffect(() => {
    fetchStates();
    fetchCities();
  }, []);

  return (
    <div>
      <Home
        statesData={stateData}
        citiesData={cityData}
        settingFormData={setformData}
      />
      {/* <DetailPage1/> */}
      {/* <DetailPage2 /> */}
      {/* <DetailPage3 /> */}
    </div>
  );
};

export default App;
