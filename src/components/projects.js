import React, { useState } from 'react';
import ProjectCard from './projectCards.js';
import ProjectDetails from './projectDetails.js';
import './projects.css';


function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    return (
        <div className="Projects">
            <h1>PROJECTS</h1>
            <div className="Projects-grid">
                {ProjectDetails.map(project => (
                    <ProjectCard key={project.id} project={project} onClick={handleCardClick} />
                ))}
            </div>
        </div>
    );
}


export default Projects;