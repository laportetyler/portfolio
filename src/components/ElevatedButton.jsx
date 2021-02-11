import React from 'react';
import { Box, Button } from "grommet";
import styled from "styled-components";


const ElevatedButton = ({...buttonProps}) => {

    const ElevatedButtonContainer = styled(Box)`
        box-shadow: 0 4px 6px, 0 1px 3px;
        margin-right: 10px;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 14px, 0 3px 6px
        }

        button, a {
            padding: 10px 20px 10px 20px;
        }
    `

    return (
        <ElevatedButtonContainer className='primary-button-container' >
            <Button {...buttonProps} />
        </ElevatedButtonContainer>
    )
}

export default ElevatedButton;