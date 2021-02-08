import React from 'react';
import ProjectCard from "./ProjectCard";
import './Projects.scss'
import projects from "../../../content/projects.json";
import ReactCardFlip from "react-card-flip";
import { Box } from "grommet";
import SectionHeading from "../../SectionHeading/SectionHeading";

const Projects = ({ darkMode, projectsRef }) => {

    return (
        <Box flex={false} ref={projectsRef} >
            <SectionHeading>Projects</SectionHeading>
            { projects && projects.map((project) => {
                return (
                    <Box flex={false} margin={{top: 'large'}} >
                        <ReactCardFlip isFlipped={darkMode}
                                       flipDirection='vertical'
                                       flipSpeedBackToFront={2}
                                       flipSpeedFrontToBack={2}
                                       infinite='true'
                                       className={'project'}
                        >
                            <ProjectCard project={project} darkMode={false} />
                            <ProjectCard project={project} darkMode={true} />
                        </ReactCardFlip>
                    </Box>

                )
            })}
        </Box>
    )
}

export default Projects;