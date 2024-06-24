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
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
  });
  const [hospitalData, setHospitalData] = useState([]);
  const [booking, setBooking] = useState(0);
  const [hospitalDetail, setHospitalDetail] = useState({
    hospitalName: '',
    hospitalAddress: '',
    state: '',
    city: '',
    rating: '',
    bookTime: '',
    bookDate: ''
  });
  const [bookingCardsData, setBookingCardsData] = useState([]);
  const [selectedHospitalData,setSelectedHospitalData] = useState([]);
  const navigateToHome = useNavigate();

  const handleBookingData = () => {
    setBookingCardsData((prevBookingData) => [...prevBookingData, hospitalDetail]);
  };

  const handleNavigationToHomePage = () => {
    navigateToHome('/');
  };

  console.log(bookingCardsData);

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

  const fetchHospitals = async (state, city) => {
    if (!state && !city) return;
    try {
      const hospitalResponse = await axios.get(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      );
      setHospitalData(hospitalResponse.data);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchCities(formData.state);
  }, [formData.state]);

  useEffect(() => {
    fetchHospitals(formData.state, formData.city);
  }, [formData.state, formData.city]);

  useEffect(()=>{
    const handleSelectedHospital=async(data)=>{
      const selectedHospital = data.map((item,index)=>item[index].hospitalName)
      return selectedHospital;
    }
    const result=handleSelectedHospital(bookingCardsData);
    setSelectedHospitalData((PHdata)=>[...PHdata,result]);
  },[])

  return (
    <div>
      <MessageNavbar handleNavigationToHomePage={handleNavigationToHomePage} />

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
        <Route
          path="/detailPage1"
          element={
            <DetailPage1 hospitalData={hospitalData} formData={formData} />
          }
        />
        <Route
          path="/detailPage2"
          element={
            <DetailPage2
              hospitalData={hospitalData}
              formData={formData}
              booking={booking}
              setBooking={setBooking}
              setHospitalDetail={setHospitalDetail}
              handleBookingData={handleBookingData}
            />
          }
        />
        <Route path="/detailPage3" element={<DetailPage3 bookingCardsData={bookingCardsData} selectedHospitalData={selectedHospitalData}/>} />
      </Routes>

      <MobDownload />
      <Footer />
    </div>
  );
};

export default App;
