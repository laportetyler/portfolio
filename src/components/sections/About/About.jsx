import React, { useContext } from 'react';
import { Box, Image, Paragraph, ResponsiveContext } from "grommet";
import './About.scss'
import SectionHeading from "../../SectionHeading/SectionHeading";
import aboutMessages from "../../../content/aboutMessages.json";
import ThemedReactFlipCard from "../../ThemedReactFlipCard";

const About = ({aboutRef}) => {

    const mobileView = useContext(ResponsiveContext) === 'small';

    return (
        <Box flex={false} ref={aboutRef} margin={{bottom: '120px'}} width={'xlarge'} pad={mobileView ? '' : {top: '30px'}}>
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

                <Box margin={{left: mobileView ? '' : 'large', top: 'large' }}
                     height={mobileView ? '' : '100%'}
                     align={'center'}
                     justify={'center'}
                     flex={false}
                >
                    <ThemedReactFlipCard
                                   flipDirection='horizontal'
                                   flipSpeedBackToFront={2}
                                   flipSpeedFrontToBack={2}
                                   infinite='true'
                                   className='about-image-container'
                                   lightCard={
                                       <Image height={'medium'} width={'medium'} className={'about-image'} src="/static/dark_about_image.png" />
                                   }
                                   darkCard={
                                       <Image height={'medium'} width={'medium'} className={'about-image'} src="/static/light_about_image.png" />
                                   }
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default About;