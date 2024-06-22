import React from 'react'
import './detail-page1.css'
import MessageNavbar from '../CommomComponents/MessageNavbar'
import SearchBarDP from './Detail-page1-component/SearchBarDP'
import SearchedDp from './Detail-page1-component/SearchedDp'
import AskFAQ from '../CommomComponents/AskFAQ'
import MobDownload from '../CommomComponents/MobDownload'
import Footer from '../CommomComponents/Footer'


const DetailPage1 = () => {
  return (
    <div className='detail-page1-container'>
        <MessageNavbar />
        <SearchBarDP />
        <SearchedDp />
        <AskFAQ />
        <MobDownload />
        <Footer/>
    </div>
  )
}

export default DetailPage1