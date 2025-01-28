import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';

import Masonry from 'react-masonry-css';
import Chip from '@mui/material/Chip';
import '../assets/styles/Project.scss';
import { Container } from "react-bootstrap";


const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const labelsFirst = [
  "SQL",
  "Python",
  "Excel"
];

const styles = {
  card: {background: 'blue', color: 'white', borderRadius: 20,},
}
export default function BasicGrid() {
  return (
    <div className="projects-container">
        <h1>
            Projects
        </h1>
            <Masonry 
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
            <div>
                <Container className="project-container">
                <div className="project-content">
                  <h2 className="project-description">
                    I have built a diverse array of web applications from scratch using
                    modern technologies such as React and Flask. I have a strong proficiency
                    in the SDLC process and frontend + backend development.
                  </h2>
                  <img src={mock01} alt="Project Mockup" className="project-image" />
                  {/* Chips Section */}
                  <div className="flex-chips">
                    {labelsFirst.map((label, index) => (
                      <Chip 
                        key={index} 
                        className="chip MuiChip-outlined" 
                        label={label} 
                        variant="outlined" 
                      />
                    ))}
                  </div>
                  <h3>Full Stack Web Development</h3>
                  </div>
                  
                </Container>
              </div>


              <div>
                <Container className="project-container">
                  <div className="project-content">
                    <h2 className="project-description">
                        I have built a diverse array of web applications from scratch using
                        modern technologies such as React and Flask. I have a strong proficiency
                        in the SDLC process and frontend + backend development.
                    </h2>
                    <img src={mock01} alt="Project Mockup" className="project-image"/>
                    <div className="flex-chips">
                    {labelsFirst.map((label, index) => (
                      <Chip 
                        key={index} 
                        className="chip MuiChip-outlined" 
                        label={label} 
                        variant="outlined" 
                      />
                    ))}
                  </div>
                    <h3>Full Stack Web Development</h3>
                  </div>
                </Container>
              </div>

                <div>
                stuff
                </div>
                <div>
                  xs=9
                </div>
                <div>
                  xs=9
                </div>

            </Masonry>
    </div>
  );
}
