import React from 'react';
import { Box, Button, Heading } from "grommet";
import ReactCardFlip from "react-card-flip";
import { GrommetTheme } from "../theme/GrommetTheme";
import styled from "styled-components";
import ElevatedButton from "./ElevatedButton";


const FlipButton = ({darkMode, ...buttonProps}) => {

    const ButtonContainer = styled(Box)`
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
        <ReactCardFlip isFlipped={darkMode}
                       flipDirection={'vertical'}
                       flipSpeedBackToFront={2}
                       flipSpeedFrontToBack={2}
                       infinite='true'
        >
            <ElevatedButton color={GrommetTheme.global.colors.standoutColor.light} {...buttonProps} />
            <ElevatedButton color={GrommetTheme.global.colors.standoutColor.dark} {...buttonProps} />
        </ReactCardFlip>
    )
}

export default FlipButton;