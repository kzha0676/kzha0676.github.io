import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="C:\Users\zhang\OneDrive\Professional Website\kzha0676.github.io\src\components\portfolio-img.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/kzha0676" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kevinzhang001/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Kevin Zhang</h1>
          <p>Data Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/kzha0676" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kevinzhang001/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;