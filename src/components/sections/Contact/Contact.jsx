import React, { useContext } from 'react';
import { Box, Button, Heading, Paragraph, ResponsiveContext } from "grommet";
import SectionHeading from "../../SectionHeading/SectionHeading";

const Contact = ({ setShowContentForm, contactRef, children }) => {

    const mobileView = useContext(ResponsiveContext) === 'small';

    return (
        <Box align={'center'} flex={false} ref={contactRef} fiil={'horizontal'}
             margin={mobileView ? {horizontal: 'xlarge', vertical: '10px'} : 'xlarge'}
             pad={mobileView ? '' : {bottom: 'xlarge'}}
        >
            <SectionHeading align={'center'} >Contact</SectionHeading>
            <Paragraph textAlign={'center'} color={'baseColor'} >
                 I'm always open to new opportunities, so feel free to reach out to me anytime! I'll do my best to get back to you.
            </Paragraph>

            {
                mobileView ? children :
                    <Box elevation='primary-button' className='primary-button-container' margin={{top: 'large'}}>
                        <Button primary className='primary-button' label='Get In Touch' onClick={() => setShowContentForm(true)} />
                    </Box>
            }


        </Box>
    )
}

export default Contact;