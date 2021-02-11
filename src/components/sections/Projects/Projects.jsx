import React, { useContext } from 'react';
import ProjectCard from "./ProjectCard";
import './Projects.scss'
import projects from "../../../content/projects.json";
import { Box, ResponsiveContext } from "grommet";
import SectionHeading from "../../SectionHeading/SectionHeading";
import ThemedReactFlipCard from "../../ThemedReactFlipCard";

const Projects = ({ projectsRef }) => {

    const mobileView = useContext(ResponsiveContext) === 'small';

    return (
        <Box flex={false} ref={projectsRef} width={'xlarge'} margin={mobileView ? '100px' : 'large'} >
            <SectionHeading>Projects</SectionHeading>
            { projects && projects.map((project) => {
                return (
                    <Box flex={false} margin={{top: 'large'}} >
                        <ThemedReactFlipCard
                            flipDirection={mobileView ? 'horizontal' : 'vertical'}
                            flipSpeedBackToFront={2}
                            flipSpeedFrontToBack={2}
                            infinite='true'
                            className={'project'}
                            lightCard={<ProjectCard project={project} darkMode={false} />}
                            darkCard={<ProjectCard project={project} darkMode={true} />}
                        />
                    </Box>

                )
            })}
        </Box>
    )
}

export default Projects;