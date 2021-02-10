import React from 'react';
import { Box, Button, Heading, Main, Paragraph } from "grommet";
import './Introduction.scss'

const Introduction = ({setShowContentForm}) => {
    return (
        <Main>
            <Box width={'xlarge'} align={'center'} margin={{top: '20vh'}} >
                <Box aling={'left'}>
                    <Heading level={'2'}  color='standoutColor' margin={'none'} size='small' >Hello there, my name is</Heading>
                    <Heading level={'1'} className={'italic-font'} color='headerText' margin={{left: '-11px', vertical:'none'}} size='large' >Tyler Laporte</Heading>
                    <Box flex={false} width={'medium'} >
                        <Paragraph  color='baseColor' >
                            I'm a fullstack software developer at Autodata Solutions with a specialty in backend development.
                        </Paragraph>
                    </Box>
                    <Box flex={false} pad={{top: 'small'}} direction='row'>
                        <Box elevation='primary-button' className='primary-button-container' >
                            <Button primary className='primary-button' label='Contact' onClick={() => setShowContentForm(true)} />
                        </Box>
                        <Box elevation='primary-button' className='primary-button-container' >
                            <Button primary className='primary-button' label='Resume' />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Main>
    )
}

export default Introduction;