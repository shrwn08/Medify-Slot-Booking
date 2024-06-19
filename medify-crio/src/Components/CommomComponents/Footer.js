import React from 'react';
import {Box} from '@mui/material'
import Logo from '../Asset/medify-logo.png'
import Facebook from '../Asset/facebook-icon.png'
import Twitter from '../Asset/twitter.png'
import Youtube from '../Asset/Youtube.png'
import Pinrest from '../Asset/pinrest.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './footer.css'
const Footer = () => {
  return (
    <Box className='footer-container'>
    <Box className='footer'>
        <Box className='footer-logo-links'>
            <Box className='footer-logo'>
                <img className='logo-foot' src={Logo} alt='logo'/>
                <Box className='social-media'>
                    <img className='facebook' src={Facebook} alt='facebook' />
                    <img className='twitter' src={Twitter} alt='twitter' />
                    <img className='youtube' src={Youtube} alt='youtube' />
                    <img className='pinrest' src={Pinrest} alt='pinrest' />
                </Box>
            </Box>
            <Box className='links-medify'>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> About us
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Orthology
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> About us
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Our Pricing
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Neurology
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Our Pricing
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Our Gallery
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Dental Care
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Our Gallery
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Appointment
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Opthalmology
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Appointment
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Privacy Policy
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Cardiology
              </Box>
              <Box className='links'>
                <ArrowForwardIosIcon sx={{
                  width:"10px",
                  height:'15px',
                  color:'#FFFFFF',
                }} /> Privacy Policy
              </Box>

            </Box>

        </Box>
    </Box>
    <Box className='copyRight'>
    Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
    </Box>
    </Box>
  )
}

export default Footer