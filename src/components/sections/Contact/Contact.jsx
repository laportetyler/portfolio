import React, { useContext } from 'react';
import { Box, Paragraph, ResponsiveContext } from "grommet";
import SectionHeading from "../../SectionHeading/SectionHeading";
import FlipButton from "../../FlipButton";

const Contact = ({ setShowContentForm, contactRef, children }) => {

    const mobileView = useContext(ResponsiveContext) === 'small';

    return (
        <Box ref={contactRef}
             align={'center'}
             flex={false}
             margin={mobileView ? '' : 'xlarge'}
             pad={mobileView ? {top: '30px'} : {bottom: 'xlarge'}}
        >
            <SectionHeading>Contact</SectionHeading>
            <Paragraph textAlign={'center'} color={'baseColor'} >
                 I'm always open to new opportunities, so feel free to reach out to me anytime! I'll do my best to get back to you.
            </Paragraph>

            {
                mobileView ? children : <FlipButton primary label={'Get In Touch'} onClick={() => setShowContentForm(true)} />
            }


        </Box>
    )
}

export default Contact;