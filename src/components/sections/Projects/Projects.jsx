import React, { useContext } from 'react';
import ProjectCard from "./ProjectCard";
import './Projects.scss'
import projects from "../../../content/projects.json";
import ReactCardFlip from "react-card-flip";
import { Box, ResponsiveContext } from "grommet";
import SectionHeading from "../../SectionHeading/SectionHeading";

const Projects = ({ darkMode, projectsRef }) => {

    const mobileView = useContext(ResponsiveContext) === 'small';

    return (
        <Box flex={false} ref={projectsRef} width={'xlarge'} margin={mobileView ? '100px' : 'large'} >
            <SectionHeading>Projects</SectionHeading>
            { projects && projects.map((project) => {
                return (
                    <Box flex={false} margin={{top: 'large'}} >
                        <ReactCardFlip isFlipped={darkMode}
                                       flipDirection={mobileView ? 'horizontal' : 'vertical'}
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