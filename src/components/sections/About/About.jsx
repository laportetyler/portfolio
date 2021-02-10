import React, { useContext } from 'react';
import { Box, Image, Paragraph, ResponsiveContext } from "grommet";
import ReactCardFlip from "react-card-flip";
import './About.scss'
import SectionHeading from "../../SectionHeading/SectionHeading";
import aboutMessages from "../../../content/aboutMessages.json";

const About = ({darkMode, aboutRef}) => {

    const mobileView = useContext(ResponsiveContext) === 'small';

    return (
        <Box flex={false} ref={aboutRef} margin={mobileView ? {bottom: 'xlarge'} : {bottom: '150px'}} width={'xlarge'}>
            <Box direction={mobileView ? 'column' : 'row'} flex={false}>
                <Box >

                    <SectionHeading>About</SectionHeading>
                    <Box margin={mobileView ? {top: 'large'} : {top:'large', right: 'medium'}} >
                    { aboutMessages && aboutMessages.map((aboutMessage) => {
                        return (
                            <Paragraph fill color={'baseColor'} >
                                { aboutMessage }
                            </Paragraph>
                        )
                    })}
                </Box>


                </Box>

                <Box margin={{left: 'large', top: 'large' }} height={mobileView ? '' : '100%'} align={'center'} justify={'center'} flex={false} >
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