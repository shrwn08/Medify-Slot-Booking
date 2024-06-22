import React from "react";
import { Box } from "@mui/material";
import MedDoctor from '../../Asset/med-doc.png'
import NeuroDoctor from '../../Asset/Neu-doc.png'
import OthroDoctor from '../../Asset/ortho-doc.png'
import MedicineDoc from '../../Asset/medi-doc.png'
import ChiroDoc from '../../Asset/c-doc.png'
import "./MedicalSpecialist.css";

const MedicalSpecialist = () => {
  return (
    <div className="Medical-specialist-container">
      <Box className="medical-specialist">
        <Box className="medical-specialist-text">Our Medical Specialist</Box>
        <Box className='medical-specialist-crousel'>
            <Box className='specialist-image-DocName'>
                    <Box className='specialist-image-container'>
                        <img className="specialist-image" src={MedDoctor} alt='medical-doctor'/>
                    </Box>
                    <span className="DocName">Dr. Lesley Hull</span>

                    <br/>
                    <span className="their-specialist">
                    Medicine
                    </span>
            </Box>
            <Box className='specialist-image-DocName'>
                    <Box className='specialist-image-container'>
                        <img className="specialist-image" src={NeuroDoctor} alt='Neuro-Doctor'/>
                    </Box>
                    <span className="DocName">Dr. Ahmad Khan</span>

                    <br/>
                    <span className="their-specialist">
                    Neurologist
                    </span>
            </Box>
            <Box className='specialist-image-DocName'>
                    <Box className='specialist-image-container'>
                        <img className="specialist-image" src={OthroDoctor} alt='Othro-Doctor'/>
                    </Box>
                    <span className="DocName">Dr. Heena Sachdeva</span>

                    <br/>
                    <span className="their-specialist">
                    Orthopadics
                    </span>
            </Box>
            <Box className='specialist-image-DocName'>
                    <Box className='specialist-image-container'>
                        <img className="specialist-image" src={MedicineDoc} alt='medical-doctor'/>
                    </Box>
                    <span className="DocName">Dr. Ankur Sharma</span>

                    <br/>
                    <span className="their-specialist">
                    Medicine
                    </span>
            </Box>
            <Box className='specialist-image-DocName'>
                    <Box className='specialist-image-container'>
                        <img className="specialist-image" src={ChiroDoc} alt='medical-doctor'/>
                    </Box>
                    <span className="DocName">Dr. Ahmad Stevens</span>

                    <br/>
                    <span className="their-specialist">
                    Gerenal
                    </span>
            </Box>
        </Box>
        <Box className='specialist-crousel'>
            <Box className='circel1'></Box>
            <Box className='circel-outer'>
                <Box className='circel-inner'></Box>
            </Box>
            <Box className='circel1'></Box>
        </Box>
      </Box>
    </div>
  );
};

export default MedicalSpecialist;
