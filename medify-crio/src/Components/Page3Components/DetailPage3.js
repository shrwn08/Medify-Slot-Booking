import React from "react";
import "./detail-DP3.css";
import MyBooking from "./deatail-page3/MyBooking";
import CardDP3 from "./deatail-page3/CardDP3";

const DetailPage3 = ({bookingCardsData,selectedHospitalData}) => {
  return (
    <div className="detail-page3-container">
      <MyBooking selectedHospitalData={selectedHospitalData}/>
      <CardDP3 bookingCardsData={bookingCardsData} />
    </div>
  );
};

export default DetailPage3;
