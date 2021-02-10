import React from 'react';
import { Box, Image, Paragraph } from "grommet";
import ReactCardFlip from "react-card-flip";
import './About.scss'
import SectionHeading from "../../SectionHeading/SectionHeading";

const About = ({darkMode, aboutRef}) => {
    return (
        <Box flex={false} ref={aboutRef} >
            <SectionHeading>About</SectionHeading>
            <Box width={'xlarge'} direction={'row'} >
                <Box height={'medium'} width={'large'} margin={'medium'} >
                    <Paragraph fill color={'baseColor'} >
                        Hello my name is Tyler I'm a software developer currently based in London Ontario
                    </Paragraph>
                    <Paragraph fill color={'baseColor'} >
                        I graduated from Western University in May 2017 with an Honors Specialization in Computer Science.
                        I've since been working at Autodata Solutions as a fullstack software developer.
                        For the past couple years I've been technical lead on multiple projects driving the design decisions while mentoring junior teammates.
                    </Paragraph>
                    <Paragraph fill color={'baseColor'} >
                        I have experience with all parts of the development lifecycle as well as all forms of development.
                        My expertise is in backend development -- building systems to manage large amounts of data and as creating and optimizing APIs.
                    </Paragraph>
                </Box>

                <Box>
                    <ReactCardFlip isFlipped={darkMode}
                                   flipDirection='horizontal'
                                   flipSpeedBackToFront={2}
                                   flipSpeedFrontToBack={2}
                                   infinite='true'
                                   className='about-image-container'
                    >
                        <Image height={'medium'} width={'medium'} className={'about-image'} src="/static/dark_about_image.png" />
                        <Image height={'medium'} width={'medium'} className={'about-image'} src="/static/light_about_image.png" />
                    </ReactCardFlip>
                </Box>
            </Box>
        </Box>
    )
}

export default About;