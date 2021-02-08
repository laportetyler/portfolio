import React from 'react';
import { Box, Heading } from "grommet";
import './SectionHeading.scss'

const SectionHeading = ({align, children}) => {
    return (
        <Box width={'xlarge'} flex={false} >
            <Box width={'large'} flex={false} alignSelf={align ? align : 'left'}>
                <Heading fill textAlign={'left'}
                         alignSelf={'left'}
                         color='headerText'
                         className='heading transition-color'
                         size='small'
                >
                    {children}
                </Heading>
            </Box>
        </Box>
    )
}

export default SectionHeading;