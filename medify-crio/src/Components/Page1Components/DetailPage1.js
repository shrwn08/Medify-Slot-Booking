import React from 'react'
import './detail-page1.css'
import SearchBarDP from './Detail-page1-component/SearchBarDP'
import SearchedResultDp from './Detail-page1-component/SearchedResultDp'
import AskFAQ from '../CommomComponents/AskFAQ'
import { useNavigate } from "react-router-dom";


const DetailPage1 = ({hospitalData,formData}) => {
  const navigate = useNavigate();

  const handleNavigationToDP2 = () => {
    navigate("/detailpage2");
  };
  return (
    <div className='detail-page1-container'>
        
        <SearchBarDP />
        <SearchedResultDp handleNavigationToDP2={handleNavigationToDP2} hospitalData={hospitalData} formData={formData}/>
        <AskFAQ />
    </div>
  )
}

export default DetailPage1