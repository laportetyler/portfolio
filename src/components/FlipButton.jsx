import React from 'react';
import { Box } from "grommet";
import ReactCardFlip from "react-card-flip";
import { GrommetTheme } from "../theme/GrommetTheme";
import ElevatedButton from "./ElevatedButton";

const FlipButton = ({darkMode, fill, ...buttonProps}) => {

    return (
        <Box fill={fill} >
            <ReactCardFlip isFlipped={darkMode}
                           flipDirection={'vertical'}
                           flipSpeedBackToFront={2}
                           flipSpeedFrontToBack={2}
                           infinite='true'
            >
                <ElevatedButton color={GrommetTheme.global.colors.standoutColor.light} {...buttonProps} />
                <ElevatedButton color={GrommetTheme.global.colors.standoutColor.dark} {...buttonProps} />
            </ReactCardFlip>
        </Box>

    )
}

export default FlipButton;