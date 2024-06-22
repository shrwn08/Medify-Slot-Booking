import React from "react";
import { Box } from "@mui/material";
import CardImage from '../../Asset/cardImage.png'
import DoctorIcon from '../../Asset/doctor-icon.png'
 import "./latest-news.css";

const LatestNews = () => {
  return (
    <div className="latest-news-container">
      <Box className="latest-news">
        
          <Box className="blogNnews">Blog & News</Box>
          <Box className="Breaking-news">Read Our Latest News</Box>
            <Box className='card-latest-news-container'>
                <Box className='cards-'>
                    <Box className='card-image'>
                    <img className="cards-img" src={CardImage}  alt='card-images'/> 
                    </Box>
                    <Box className='medical-date'>
                            <Box className='medical-box'>
                            Medical
                            </Box>
                            <Box className='date-box'>
                            March 31, 2022
                            </Box>
                    </Box>
                    <Box className='cards-long-text'>
                    6 Tips To Protect Your Mental Health When You’re Sick
                    </Box>
                        <Box className='doc-icon-name'>
                            <Box className='l-n-doc-icon'>
                                <img className="ln-docIcon" src={DoctorIcon} alt='doc-icon'/>
                            </Box>
                            <Box className='l-s-doc-name'>
                            Rebecca Lee
                            </Box> 
                        </Box>
                </Box>
                <Box className='cards-'>
                    <Box className='card-image'>
                    <img className="cards-img" src={CardImage}  alt='card-images'/> 
                    </Box>
                    <Box className='medical-date'>
                            <Box className='medical-box'>
                            Medical
                            </Box>
                            <Box className='date-box'>
                            March 31, 2022
                            </Box>
                    </Box>
                    <Box className='cards-long-text'>
                    6 Tips To Protect Your Mental Health When You’re Sick
                    </Box>
                        <Box className='doc-icon-name'>
                            <Box className='l-n-doc-icon'>
                                <img className="ln-docIcon" src={DoctorIcon} alt='doc-icon'/>
                            </Box>
                            <Box className='l-s-doc-name'>
                            Rebecca Lee
                            </Box> 
                        </Box>
                </Box>
                <Box className='cards-'>
                    <Box className='card-image'>
                    <img className="cards-img" src={CardImage}  alt='card-images'/> 
                    </Box>
                    <Box className='medical-date'>
                            <Box className='medical-box'>
                            Medical
                            </Box>
                            <Box className='date-box'>
                            March 31, 2022
                            </Box>
                    </Box>
                    <Box className='cards-long-text'>
                    6 Tips To Protect Your Mental Health When You’re Sick
                    </Box>
                        <Box className='doc-icon-name'>
                            <Box className='l-n-doc-icon'>
                                <img className="ln-docIcon" src={DoctorIcon} alt='doc-icon'/>
                            </Box>
                            <Box className='l-s-doc-name'>
                            Rebecca Lee
                            </Box> 
                        </Box>
                </Box>
            </Box>
            
      </Box>
    </div>
  );
};

export default LatestNews;
