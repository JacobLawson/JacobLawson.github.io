import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import portfolioVid from '../assets/videos/Jacob Lawson - 2024 Game Programming Portfolio.mp4'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
		<video autoPlay muted loop playsInline preload="auto" id="myVideo">
		  <source src={portfolioVid} type="video/mp4" />
		  Your browser does not support HTML5 video.
		</video>
		<div className="video-overlay" />
		
        <div className="image-wrapper">
        </div>
		
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/JacobLawson" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jacob-lawson-32a680204/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jacob Lawson</h1>
          <p>Software Engineer · Games Programmer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/JacobLawson" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jacob-lawson-32a680204/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;