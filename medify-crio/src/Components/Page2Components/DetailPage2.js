import React from "react";
import "./detail-page2.css";
import SearchBarDP from "../Page1Components/Detail-page1-component/SearchBarDP";
import AskFAQ from "../CommomComponents/AskFAQ";
import ResultedCard from "./detail-page2/ResultedCard";

const DetailPage2 = ({
  hospitalData,
  formData,
  booking,
  setBooking,
  setHospitalDetail,
  handleBookingData
}) => {
  console.log(hospitalData);
  console.log(formData);
  return (
    <div className="detail-page2-container">
      <SearchBarDP />
      <ResultedCard
        hospitalData={hospitalData}
        formData={formData}
        booking={booking}
        setBooking={setBooking}
        setHospitalDetail={setHospitalDetail}
        handleBookingData={handleBookingData}
      />
      <AskFAQ />
    </div>
  );
};

export default DetailPage2;
