import React from 'react';
import { Box, Heading } from "grommet";
import './SectionHeading.scss'

const SectionHeading = ({fitContent, children}) => {
    return (
        <Box flex={false} width={fitContent ? 'fit-content' : ''} margin={'none'} pad={{bottom: '2px'}} border={{color: 'headerText', side: 'bottom', size: '3px' }} >
            <Heading
                     color='headerText'
                         size='small'
                         margin={'none'}
                         responsive={false}
            >
                {children}
            </Heading>
        </Box>
    )
}

export default SectionHeading;