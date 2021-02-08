import React from 'react';
import { Box, Grid, Image, Main, Paragraph } from "grommet";
import ReactCardFlip from "react-card-flip";
import './About.scss'
import SectionHeading from "../../SectionHeading/SectionHeading";

const About = ({darkMode, aboutRef}) => {
    return (
        <Box flex={false} ref={aboutRef} >
            <SectionHeading>About</SectionHeading>
            <Box direction={'row'} >
                <Box height={'medium'} width={'large'} margin={'medium'} >
                    <Paragraph fill color={'baseColor'} >
                        Hello my name is Tyler I'm a software developer with expertise
                    </Paragraph>
                    <Paragraph fill color={'baseColor'} >
                        I graduated from Western University in May 2017 with an Honors Specialization in Computer Science.
                        I've since been working at Autodata Solutions as a fullstack software developer. For the past couple years I've been
                        technical lead on multiple projects driving the design decisions while mentoring junior teammates.
                    </Paragraph>
                    <Paragraph fill color={'baseColor'} >
                        I'm always looking to learn new technologies but here are a
                    </Paragraph>
                    <Paragraph fill color={'baseColor'} >
                        I'm open to new opportunities.
                    </Paragraph>
                </Box>
                <Box height={{min: '0px', max: 'medium', height: 'medium'}} width={{min: 'medium', max:'medium', width:'medium'}}>
                    <ReactCardFlip isFlipped={darkMode}
                                   flipDirection='horizontal'
                                   flipSpeedBackToFront={2}
                                   flipSpeedFrontToBack={2}
                                   infinite='true'
                                   className='about-image-container'
                    >
                        <Image height={'medium'} width={'medium'} className={'about-image'} src="/static/light_about_image.png" />
                        <Image height={'medium'} width={'medium'} className={'about-image'} src="/static/dark_about_image.png" />
                    </ReactCardFlip>
                </Box>
            </Box>
        </Box>
    )
}

export default About;