import React from 'react';
import { Box } from "grommet";
import { GrommetTheme } from "../theme/GrommetTheme";
import ElevatedButton from "./ElevatedButton";
import ThemedReactFlipCard from "./ThemedReactFlipCard";

const FlipButton = ({fill, ...buttonProps}) => {

    return (
        <Box fill={fill} >
            <ThemedReactFlipCard
                flipDirection={'vertical'}
                flipSpeedBackToFront={2}
                flipSpeedFrontToBack={2}
                infinite='true'
                lightCard={<ElevatedButton color={GrommetTheme.global.colors.standoutColor.light} {...buttonProps} />}
                darkCard={<ElevatedButton color={GrommetTheme.global.colors.standoutColor.dark} {...buttonProps} />}
            />
        </Box>

    )
}

export default FlipButton;