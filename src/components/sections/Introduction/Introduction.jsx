import React, { useContext } from 'react';
import { Box, Heading, Main, Paragraph, ResponsiveContext } from "grommet";
import scrollIntoView from "../../../utils/ScrollIntoView";
import styled from "styled-components";
import FlipButton from "../../FlipButton";

const Introduction = ({setShowContentForm, contactRef, darkMode}) => {

    const size = useContext(ResponsiveContext);

    const contactOnClick = size === 'small' ? () => scrollIntoView(contactRef) : () => setShowContentForm(true);

    const NameHeading = styled(Heading)`
        font-style: italic;
    `;

    return (
        <Main>
            <Box width={'xlarge'} align={'center'} margin={{top: '20vh'}} >
                <Box aling={'left'}>
                    <Heading level={'2'} color='standoutColor' margin={'none'} size='small' >Hello there, my name is</Heading>
                    <NameHeading level={'1'} color='headerText' margin={{left: '-11px', vertical:'none'}} size='large' >Tyler Laporte</NameHeading>
                    <Box flex={false} width={'medium'} >
                        <Paragraph color='baseColor' >
                            I'm a fullstack software developer at Autodata Solutions with a specialty in backend development.
                        </Paragraph>
                    </Box>
                    <Box flex={false} pad={{top: 'small'}} direction='row'>
                        <FlipButton darkMode={darkMode} primary label={'Contact'} onClick={contactOnClick}  />
                        <FlipButton darkMode={darkMode} primary label={'Resume'} />
                    </Box>
                </Box>
            </Box>
        </Main>
    )
}

export default Introduction;