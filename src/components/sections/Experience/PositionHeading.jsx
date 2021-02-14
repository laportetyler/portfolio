import React, { useState } from "react";
import { Box, Text } from "grommet";

const PositionHeading = ({position, positionId, selectedPosition, setSelectedPosition}) => {

    const [hovering, setHovering] = useState(false);
    const [transitionDisabled, setTransitionDisabled] = useState(false);

    const onClick = ((positionId) => {
        setTransitionDisabled(true);
        setSelectedPosition(positionId)
    });

    const enableHighlight = () => {
        setHovering(true);
        setTransitionDisabled(true);
    }

    const disableHighlight = () => {
        setHovering(false)
        setTimeout(function(){ setTransitionDisabled(false); console.log('transition enabled') }, 2000);
    }

    const selected = selectedPosition === positionId;

    const displayAccentColor = selected || hovering;

    return (
        <Box pad={{left: 'medium', bottom: 'small'}} margin={{left: '4px'}}
                         border={{color: displayAccentColor ? 'standoutColor' : 'headerText', side:'left', size:'medium'}}
                         onClick={() => onClick(positionId)}
                         className={transitionDisabled ? 'no-transition' : ''}
                         onMouseOver={enableHighlight}
                         onMouseOut={disableHighlight}
        >

            <Text
                className={transitionDisabled ? 'no-transition' : ''}
                color={displayAccentColor ? 'standoutColor': 'baseColor'} >
                {position.title}
            </Text>
        </Box>
    )
}

export default PositionHeading;