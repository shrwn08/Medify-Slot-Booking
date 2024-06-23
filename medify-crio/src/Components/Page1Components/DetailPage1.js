import React from 'react'
import './detail-page1.css'
import MessageNavbar from '../CommomComponents/MessageNavbar'
import SearchBarDP from './Detail-page1-component/SearchBarDP'
import SearchedResultDp from './Detail-page1-component/SearchedResultDp'
import AskFAQ from '../CommomComponents/AskFAQ'
import MobDownload from '../CommomComponents/MobDownload'
import Footer from '../CommomComponents/Footer'
// import { useNavigate } from "react-router-dom";


const DetailPage1 = () => {
  return (
    <div className='detail-page1-container'>
        
        <SearchBarDP />
        <SearchedResultDp />
        <AskFAQ />
    </div>
  )
}

export default DetailPage1