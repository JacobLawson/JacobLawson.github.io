import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/About.scss';


function About() {
    return (
    <div className="container" id="About">
		<div className="about-box">
			<h1>About</h1>
			<p>
				Hello, I’m Jacob — a games programmer from the UK with over 10 years of experience in game development as a hobby, and 2 years as a professional.
			</p>
			<p>
				I graduated from the University of Gloucestershire in 2022 with a first-class bachelor’s degree in Computer Game Programming. I worked at Motorsport Games' Studio 397 on immersive racing simulation games like <strong>rFactor 2</strong> and <strong>Le Mans Ultimate</strong>.
			</p>
			<p>
				I have a passion for problem-solving and enjoy tackling challenging bugs and technical issues. I’m always eager to learn new things, experiment with fresh ideas, and collaborate closely with others.
			</p>
			<p>
				This portfolio showcases the projects I’ve contributed to professionally, as well as the personal experiments and tools I’ve built for fun.
			</p>
		</div>
	</div>)
}

export default About;