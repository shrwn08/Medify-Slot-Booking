import React from 'react'
import './detail-page2.css'
import MessageNavbar from '../CommomComponents/MessageNavbar'
import SearchBarDP from '../Page1Components/Detail-page1-component/SearchBarDP'
import Footer from '../CommomComponents/Footer'
import MobDownload from '../CommomComponents/MobDownload'
import AskFAQ from '../CommomComponents/AskFAQ'
import CardDP2 from './detail-page2/CardDP2'

const DetailPage2 = () => {
  return (
    <div className='detail-page2-container'>
        <MessageNavbar />
        <SearchBarDP />
        <CardDP2 />
        <AskFAQ />
        <MobDownload />
        <Footer />
    </div>
  )
}

export default DetailPage2