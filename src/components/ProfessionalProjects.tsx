import React from "react";
import Chip from '@mui/material/Chip';
import mock01 from '../assets/images/mock01.png';
import mock01B from '../assets/videos/Le Mans.mp4'
import mock02 from '../assets/images/mock02.png';
import mock02B from '../assets/videos/rFactor 2.mp4';
import mock03 from '../assets/images/mock03.png';
import mock03B from '../assets/videos/hop top.mp4';
import '../assets/styles/Project.scss';

const labelsMSG = [
    "C++",
	"Proprietary engine",
	"HLSL",
    "WPF",
    "C#",
	"HTML",
    "Java-script",
    "Git",
    "Jira",
    "AWS",
	"Steam"
];

const labelsMiracle = [
	"Gamemaker Studio 2",
	"Custom scripting language",
	"Steam"
];

function ProfessionalProjects() {
    return(
    <div className="projects-container" id="professionalprojects">
        <h1>Professional Projects</h1>
        <div className="projects-grid">
            <div className="project">
			  <a href="https://store.steampowered.com/app/2399420/Le_Mans_Ultimate/" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock01} alt="thumbnail" className="base" width="100%"/>
				  <video className="hover" autoPlay muted loop playsInline preload="auto"><source src={mock01B} type="video/mp4" /> Your browser does not support HTML5 video.</video>
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsMSG.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://store.steampowered.com/app/2399420/Le_Mans_Ultimate/" target="_blank" rel="noreferrer"><h2>Le Mans Ultimate</h2></a>
			  <p>Le Mans Ultimate is the official world endurance championship and 24 hours of Le Mans game. I worked on the title from day one until its second major update post-launch. I was a junior C++ programmer on this title and spent much of my time working on technical issues throughout the project.</p>
			</div>
            <div className="project">
			  <a href="https://store.steampowered.com/app/365960/rFactor_2/" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock02} alt="thumbnail" className="base" width="100%"/>
				  <video className="hover" autoPlay muted loop playsInline preload="auto"><source src={mock02B} type="video/mp4" /> Your browser does not support HTML5 video.</video>
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsMSG.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://store.steampowered.com/app/365960/rFactor_2/" target="_blank" rel="noreferrer"><h2>rFactor 2</h2></a>
			  <p>I worked on the racing simulator rFactor 2 as a junior C++ programmer for 6 months before the team moved on to Le Mans Ultimate. I focused on graphical features and bugs while I got to grips with the proprietary engine the game used.</p>
			</div>
            <div className="project">
			  <a href="https://store.steampowered.com/app/2829240/HOP_TOP/" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock03} alt="thumbnail" className="base" width="100%"/>
				  <video className="hover" autoPlay muted loop playsInline preload="auto"><source src={mock03B} type="video/mp4" /> Your browser does not support HTML5 video.</video>
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsMiracle.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://store.steampowered.com/app/2829240/HOP_TOP/" target="_blank" rel="noreferrer"><h2>HOP TOP</h2></a>
			  <p>HOP TOP is an indie arcade platformer written in Gamemaker Studio. I was hired as a freelancer on this project after the development began to fall behind on its milestone targets. I spent long hours in my evenings at weekends getting development back on track and improving team communication up until the launch of the game on Steam.</p>
			</div>
        </div>
    </div>
    );
}

export default ProfessionalProjects;