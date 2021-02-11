import React from 'react';
import { Box, Heading, Layer} from "grommet";
import './ContactForm.scss'

const ContactFormOverlay = ({ setShowContentForm, children }) => {

    const disableContactForm = () => {
        setShowContentForm(false);
    }

    return (
        <Layer
            className={'layer'}
            onEsc={disableContactForm}
            onClickOutside={disableContactForm}
        >
            <Box width={'medium'} background={'background'} round={'medium'}>
                <Heading fill textAlign={'center'}
                         color='baseColor'
                         size='small'
                         margin={{bot: 'medium'}}
                >
                    Contact
                </Heading>
                {children}
            </Box>

        </Layer>
    )
}

export default ContactFormOverlay;