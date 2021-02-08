import React from 'react';
import { Box, Button, Heading, Main, Paragraph } from "grommet";
import './Introduction.scss'

const Introduction = ({setShowContentForm}) => {
    return (
        <Main>
            <Box pad={{top:'xlarge'}} margin={{top:'xlarge'}} >
                <Heading color='standoutColor' margin='none' size='small' >Hello there, my name is</Heading>
                <Heading color='headerText' margin='none' size='large' >Tyler Laporte</Heading>
                <Box width={'medium'} >
                    <Paragraph color='baseColor' >
                        I'm a software developer at Autodata Solutions. test
                        My passion is building [ some stuff here about developing things ]
                    </Paragraph>
                </Box>
                <Box pad={{top: 'small'}} direction='row'>
                    <Box elevation='primary-button' className='primary-button-container' >
                        <Button primary className='primary-button' label='Contact' onClick={() => setShowContentForm(true)} />
                    </Box>
                    <Box elevation='primary-button' className='primary-button-container' >
                        <Button primary className='primary-button' label='Resume' />
                    </Box>
                </Box>
            </Box>

        </Main>
    )
}

export default Introduction;