import React, { useContext } from 'react';
import { Box, Heading, ResponsiveContext } from "grommet";
import './SectionHeading.scss'

const SectionHeading = ({align, children}) => {
    return (
        <Box flex={false} margin={'none'} >
            <Box  flex={false} alignSelf={align ? align : 'left'}>
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