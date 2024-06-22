import React from "react";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import DocMan from "../Asset/doc-with-man.png";
import HappyEmoji from '../Asset/happy-emoji.png';
import HeartInHand from '../Asset/heart-in-hand.png'
import "./Ask-faq.css";

const AskFAQ = () => {
  return (
    <Box className="FAQ-container">
      <Box className="FAQ-Sub-container">
        <Box className="faq">
          <Box className="faq-heading">
            <Box className="get-your-ans">Get Your Answer</Box>
            <Box className="FAQ-Text">Frequently Asked Questions</Box>
          </Box>
          <Box className="image-question">
            <Box className='happy-emoji-icon'>
              <Box className='emoji-icon'>
                <img className="happy-emoji" src={HappyEmoji} alt="happy-emoji" />
              </Box>
              <Box className='ask-happy-patient-text'>
                <p className="ask-like">84K+</p>
                <p className="ask-emoji-text">Happy Patients</p>
              </Box>
            </Box>
            <Box className='ask-heart-in-hand-container'>
              
                <img className="ask-heart-in-hand" src={HeartInHand} alt="heart-in-hand"/>
              
            </Box>
            <Box className="image-faq">
              <img src={DocMan} alt="doc" className="image-Doc-ask" />
            </Box>
            <Box className="faq-question">
              <Accordion sx={{ border: "none", boxShadow: "none" }}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    sx={{
                      width: "374px",
                      height: "30px",
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#1B3C74",
                    }}
                  >
                    Why choose our medical for your family?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                    eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ border: "none", boxShadow: "none" }}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography
                    sx={{
                      width: "374px",
                      height: "30px",
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#1B3C74",
                    }}
                  >
                    Why we are different from others?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                    eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ border: "none", boxShadow: "none" }}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography
                    sx={{
                      width: "374px",
                      height: "30px",
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#1B3C74",
                    }}
                  >
                    Trusted & experience senior care & love
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                    eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ border: "none", boxShadow: "none" }}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <Typography
                    sx={{
                      width: "381px",
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#1B3C74",
                    }}
                  >
                    How to get appointment for emergency cases?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                    eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AskFAQ;
