import React from 'react'
import './detail-DP3.css'
import MessageNavbar from '../CommomComponents/MessageNavbar'
import MyBooking from './deatail-page3/MyBooking'
import CardDP3 from './deatail-page3/CardDP3'
import MobDownload from '../CommomComponents/MobDownload'
import Footer from '../CommomComponents/Footer'

const DetailPage3 = () => {
  return (
    <div className='detail-page3-container'>
        <MessageNavbar />
        <MyBooking />
        <CardDP3 />
        <MobDownload />
        <Footer />

    </div>
  )
}

export default DetailPage3