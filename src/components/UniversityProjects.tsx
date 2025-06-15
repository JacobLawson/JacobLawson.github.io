import React from "react";
import Chip from '@mui/material/Chip';
import mock01 from '../assets/images/mock01.png';
import mock01B from '../assets/videos/2024-12-22 20-45-21.mp4'
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
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

function UniversityProjects() {
    return(
    <div className="projects-container" id="projects">
    </div>
    );
}

export default UniversityProjects;