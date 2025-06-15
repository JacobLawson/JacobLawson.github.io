import React from "react";
import Chip from '@mui/material/Chip';
import mock04 from '../assets/images/mock04.png';
import mock04B from '../assets/videos/behaviour_trees.mp4'
import mock05 from '../assets/images/mock05.png';
import mock05B from '../assets/videos/animation_editor.mp4'
import mock06 from '../assets/images/mock06.png';
import mock06B from '../assets/videos/planet_mush.mp4'
import mock07 from '../assets/images/mock07.png';
import mock07B from '../assets/videos/mirrorchrome.mp4';
import mock08 from '../assets/images/mock08.png';
import mock08B from '../assets/videos/YKTD2024.mp4';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.png';
import mock11B from '../assets/videos/legends.mp4';
import mock12 from '../assets/images/mock12.png';
import mock13 from '../assets/images/mock13.png';
import mock13B from '../assets/videos/overdrive.mp4';
import '../assets/styles/Project.scss';

const labelsTools = [
	"WPF",
	"C#",
	"XML"
];

const labelsC = [
	"C++",
	"OpenGL",
	"IMGUI"
];

const labelsCB = [
	"C++",
];

const labelsUnityA = [
	"Unity",
	"C#",
	"FMod"
];

const labelsUnityB = [
	"Unity",
	"C#"
];

const labelsGamemakerA = [
	"Gamemaker Studio",
	"Gamemaker Studio 2",
	"Custom scripting language"
];

const labelsGamemakerB = [
	"Gamemaker Studio 2",
];

const labelsGamemakerC = [
	"Gamemaker Studio",
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
			  <a href="https://github.com/JacobLawson/Wisp-Behaviour-Tree-Editor" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock04} alt="thumbnail" className="base" width="100%"/>
				  <img src={mock04} alt="thumbnail" className="hover" width="100%"/>
				 
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsTools.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://github.com/JacobLawson/Wisp-Behaviour-Tree-Editor" target="_blank" rel="noreferrer"><h2>AI Behaviour Tree Editor</h2></a>
			  <p>A WPF tool I wrote to help visualise and develop a behaviour tree-based AI system for a personal project. It exports created trees and Json and is capable of loading them back in. It supports sequence, condition, parallel and selector nodes.</p>
			</div>
            <div className="project">
			  <a href="https://example.com" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock05} alt="thumbnail" className="base" width="100%"/>
				  <img src={mock05} alt="thumbnail" className="hover" width="100%"/>
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsTools.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://example.com" target="_blank" rel="noreferrer"><h2>Sprite Animation Editor</h2></a>
			  <p>A WPF Sprite animation tool I wrote for a personal project. It was designed for 8 directional facing character sprites so that I can easily break down a sprite sheet assign 8 directional animations assigned to the same identifying label so that they can be switched easily based on angle. The tool makes producing these animations easier with a setting to select frames of animation on multiple rows at a time. It exports the animation data as a Json.</p>
			</div>
			<div className="project">
			  <a href="https://github.com/JacobLawson/Entity-Component-Framework-with-boids" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock10} alt="thumbnail" className="base" width="100%"/>
				  <img src={mock10} alt="thumbnail" className="hover" width="100%"/>
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsC.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://github.com/JacobLawson/Entity-Component-Framework-with-boids" target="_blank" rel="noreferrer"><h2>C++ entity-component framework</h2></a>
			  <p>A C++ project I have been working on and off on for a few years is an entity component framework. Currently the entity component system is functional and supports scenes, cameras and model loading. I still have a lot to do on this project, and I am currently updating the renderer from OpenGL to DirectX12. I intend to use this as a framework for game jams when it is ready.</p>
			</div>
			<div className="project">
			  <a href="https://teamfungis.itch.io/planet-mush" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock06} alt="thumbnail" className="base" width="100%"/>
				  <video className="hover" autoPlay muted loop playsInline preload="auto"><source src={mock06B} type="video/mp4" /> Your browser does not support HTML5 video.</video>
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsUnityA.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://teamfungis.itch.io/planet-mush" target="_blank" rel="noreferrer"><h2>Planet Mush</h2></a>
			  <p>Planet Mush was my big final-year group project at the university. It is a cozy farming game where you must go out and explore different regions for different mushrooms. You then farm these mushrooms and brew potions to sell. At Night you must defend your farm from crop-eating monsters. My contributions included all systems within the core game loop of gathering, farming, brewing, and combat, day and night cycle, Inventory, NPC dialogue system, enemy AI, save and load system, daily quests for reward, potion effects, and shaders. </p>
			</div>
			<div className="project">
			  <a href="https://two-tone-team.itch.io/mirror-chrome" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock07} alt="thumbnail" className="base" width="100%"/>
				  <video className="hover" autoPlay muted loop playsInline preload="auto"><source src={mock07B} type="video/mp4" /> Your browser does not support HTML5 video.</video>
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsUnityB.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://two-tone-team.itch.io/mirror-chrome" target="_blank" rel="noreferrer"><h2>Mirror Chrome</h2></a>
			  <p>MIRROR CHROME was made for our experimental games module in year two at university. It is a small puzzle platformer about a robot who can flip between two inverted play fields.</p>
			  <p>My contributions:<br />
				•	Player controller and flipping mechanic.<br />
				•	Puzzle objects.<br />
				•	Menus and level selection.
				</p>
			</div>
            <div className="project">
			  <a href="https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=146" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock08} alt="thumbnail" className="base" width="100%"/>
				  <video className="hover" autoPlay muted loop playsInline preload="auto"><source src={mock08B} type="video/mp4" /> Your browser does not support HTML5 video.</video>
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsGamemakerA.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=146" target="_blank" rel="noreferrer"><h2>You Know The Drill</h2></a>
			  <p>You Know the Drill started life as a submission for a game jam and was later expanded on with more levels and content. The game is about digging through layers of caverns while under a time limit and without running into hazards or power. The game was made with GameMaker Studio.</p>
			</div>
			<div className="project">
			  <a href="https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=41" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock11} alt="thumbnail" className="base" width="100%"/>
				  <video className="hover" autoPlay muted loop playsInline preload="auto"><source src={mock11B} type="video/mp4" /> Your browser does not support HTML5 video.</video>
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsGamemakerB.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=41" target="_blank" rel="noreferrer"><h2>Sonic Legends (fan project)</h2></a>
			  <p>Sonic Legends is a fan game project I have contributed to over the past few years. Over the years we as a team have built a robust and responsive emulation of 2D Sonic gameplay alongside a set of tools within Gamemaker to create a fun and fast paced game. I have contributed to a variety of features within the game such as physics and collision issues, stage elements, bosses and cutscenes.</p>
			</div>
			<div className="project">
			  <a href="https://github.com/JacobLawson/Graphics-Programming" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock09} alt="thumbnail" className="base" width="100%"/>
				  <img src={mock09} alt="thumbnail" className="hover" width="100%"/>
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsC.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://github.com/JacobLawson/Graphics-Programming" target="_blank" rel="noreferrer"><h2>OpenGL Renderer</h2></a>
			  <p>A study of scene rendering in OpenGL written in C++. It features global lighting, spotlights, point lights, reflections, tessellation shader used for waves, basic particle rendering and normal map support.</p>
			</div>
			<div className="project">
			  <a href="https://github.com/JacobLawson/Raycaster-Framework" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock12} alt="thumbnail" className="base" width="100%"/>
				  <img src={mock12} alt="thumbnail" className="hover" width="100%"/>
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsCB.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://github.com/JacobLawson/Raycaster-Framework" target="_blank" rel="noreferrer"><h2>Raycaster Rendering Framework</h2></a>
			  <p>A ray casting rendering framework written at university. It supports texture loading, textured walls and movement.</p>
			</div>
			<div className="project">
			  <a href="https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=66" target="_blank" rel="noreferrer">
				<div className="project-thumbnail">
				  <img src={mock13} alt="thumbnail" className="base" width="100%"/>
				   <video className="hover" autoPlay muted loop playsInline preload="auto"><source src={mock13B} type="video/mp4" /> Your browser does not support HTML5 video.</video>
				  <div className="flex-chips">
					<span className="chip-title">Skills:</span>
					{labelsGamemakerC.map((label, index) => (
						<Chip key={index} className='chip' label={label} />
					))}
				  </div>
				</div>
			  </a>
			  <a href="https://www.hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=66" target="_blank" rel="noreferrer"><h2>Mega Man Overdrive (fan project)</h2></a>
			  <p>Mega Man Overdrive is a personal fan project that pushes the boundaries of traditional Mega Man fan games. Rather than sticking to the classic 8-bit, 4:3 presentation, I’ve redesigned the game for a modern widescreen format to enhance both gameplay flow and visual impact. Alongside this, I’ve introduced original mechanics and level design ideas to make the game feel fresh while staying true to the core spirit of the series.</p>
			</div>
        </div>
    </div>
    );
}

export default Project;