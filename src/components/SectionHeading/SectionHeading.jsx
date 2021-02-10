import React, { useContext } from 'react';
import { Box, Heading, ResponsiveContext } from "grommet";
import './SectionHeading.scss'

const SectionHeading = ({align, children}) => {
    return (
        <Box flex={false} margin={'none'} >
            <Box  flex={false} alignSelf={align ? align : 'left'}>
                <Heading fill
                         color='headerText'
                         className='heading transition-color'
                         size='small'
                         margin={'none'}
                         responsive={false}
                >
                    {children}
                </Heading>
            </Box>
        </Box>
    )
}

export default SectionHeading;