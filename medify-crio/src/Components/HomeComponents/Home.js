import React from 'react'
import {Box} from '@mui/material'
import Footer from '../CommomComponents/Footer'
import MobDownload from '../CommomComponents/MobDownload';
import AskFAQ from '../CommomComponents/AskFAQ'
import MessageNavbar from '../CommomComponents/MessageNavbar';
import HeroSection from './Home-Component/HeroSection';
import './home.css'
import Crousel from './Home-Component/Crousel';
import Specialization from './Home-Component/Specialization';
const Home = () => {
  return (
    <Box className='home-container'>
    <MessageNavbar />
    <HeroSection />
    <Crousel />
    <Specialization />
    <AskFAQ />
        <MobDownload   />
        <Footer />
    </Box>
  )
}

export default Home