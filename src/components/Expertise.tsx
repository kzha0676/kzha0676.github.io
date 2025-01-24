import React from "react";
import '../assets/styles/Expertise.scss';
import Stack from '@mui/material/Stack';
import { Col } from "react-bootstrap";
import {
  SiTableau,
  SiPython,
  SiPostgresql 
} from "react-icons/si";
import {
    PiMicrosoftExcelLogo
  } from "react-icons/pi";

const Expertise = () => {
  return (
    <div className="skills-container" id= "expertise" >
            <h1>Skills</h1>
            <div className="container" style={{ marginTop: '0px' }}>
                <Stack 
                    spacing={{ xs: 3, sm: 6 }}
                    direction="row"
                    useFlexGap
                    sx={{ flexWrap: 'wrap', marginTop: '0px' }}
                    >
                    <Col xs={6} md={3} className="tech-icons">
                        <PiMicrosoftExcelLogo />
                    </Col>
                    <Col xs={6} md={3} className="tech-icons">
                        <SiPostgresql/>
                    </Col>
                    <Col xs={6} md={3} className="tech-icons">
                        <SiPython/>
                    </Col>
                    <Col xs={6} md={3} className="tech-icons">
                        <SiTableau />
                    </Col>
                </Stack>
            </div>
    </div>
  );
}


export default Expertise;