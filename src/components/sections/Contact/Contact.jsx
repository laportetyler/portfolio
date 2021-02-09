import React from 'react';
import { Box, Button, Heading, Paragraph } from "grommet";

const Contact = ({ setShowContentForm, contactRef }) => {
    return (
        <Box height={'medium'} width={'large'} margin={'xlarge'} align={'center'} flex={false} ref={contactRef}>
            <Heading color='headerText'
                     className='heading transition-color'
                     size='medium'
            >
                Contact
            </Heading>
            <Paragraph textAlign={'center'} color={'baseColor'} >
                 I'm always open to new opportunities, so feel free to reach out to me anytime! I'll do my best to get back to you.
            </Paragraph>
            <Box elevation='primary-button' className='primary-button-container' margin={{top: 'large'}}>
                <Button primary className='primary-button' label='Get In Touch' onClick={() => setShowContentForm(true)} />
            </Box>
        </Box>
    )
}

export default Contact;