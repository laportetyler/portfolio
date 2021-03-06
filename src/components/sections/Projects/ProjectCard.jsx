import React, { useContext } from 'react';
import { Box, Card, Heading, Paragraph, ResponsiveContext, Stack } from "grommet";
import { GrommetTheme } from "../../../theme/GrommetTheme";
import ProjectTechnology from "./ProjectTechnology";
import { Github } from "grommet-icons";
import ElevatedButton from "../../ElevatedButton";

const ProjectCard = ({ project, darkMode }) => {

    const colors = GrommetTheme.global.colors;

    const projectImage = darkMode ? project.image.dark : project.image.light;
    const cardBackground = darkMode ? colors.cardBackground.dark : colors.cardBackground.light;
    const baseColor = darkMode ? colors.baseColor.dark : colors.baseColor.light;
    const headerText = darkMode ? colors.headerText.dark : colors.headerText.light;

    const mobileView = useContext(ResponsiveContext) === 'small';

    return (
        <Card width={'xlarge'} background={cardBackground}>
            <Box direction={mobileView ? 'column' : 'row'}>

                <Box className={'project-image-container'} width={mobileView ? '' : '50%'} height={mobileView ? '150px' : ''}>
                    <Stack className={'project-image-stack'}  >
                        <Box background={{image: 'url(' + projectImage + ')', size: 'cover', position: 'left'}} />
                        <Box background={'linear-gradient(to ' + (mobileView ? 'top' : 'left') + ', ' + cardBackground + ' 0%, rgba(0, 0, 0, 0) 100%)'} />
                    </Stack>
                </Box>

                <Box margin={mobileView ? {left: 'medium', right:'small', vertical:'large'} : {right: 'xlarge', left: 'medium', vertical: 'medium'}}
                     width={mobileView ? '' : '60%'}
                     className={'project-content'}
                >

                    <Heading color='headerText' margin='none' size='small'>{project.name}</Heading>

                    {
                        project.text && project.text.map((text) => {
                            return <Paragraph margin={{vertical: 'small'}} fill color={baseColor}>{text}</Paragraph>
                        })
                    }

                    <Box align={'center'} margin={{top: 'small'}} direction={'row'} className={'project-technologies'}>
                        {
                            project.technologies && project.technologies.map((technology) => {
                                return <ProjectTechnology headerText={headerText} technology={technology}/>
                            })
                        }
                    </Box>

                    {
                        project.source && (
                            <Box pad={{top: 'small'}} direction='row' fill={'horizontal'} align={mobileView ? 'center' : 'left'}>
                                <ElevatedButton primary icon={<Github/>} label='Source code' href={project.source} target={'_blank'} />
                            </Box>
                        )
                    }

                </Box>
            </Box>
        </Card>
    )
}

export default ProjectCard;