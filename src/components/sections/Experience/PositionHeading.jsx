import React, { useContext } from "react";
import { Box, Text } from "grommet";
import ThemeContext from "../../../context/ThemeContext";

const PositionHeading = ({position, positionId, selectedPosition, setSelectedPosition}) => {

    const [hovering, setHovering] = React.useState(false);
    const { themeTransitioning } = useContext(ThemeContext);

    const selected = selectedPosition === positionId;

    return (
        <Box
            pad={{left: 'medium', bottom: 'small'}} margin={{left: '4px'}}
            border={{color: selected || hovering ? 'standoutColor' : 'headerText', side:'left', size:'medium'}}
            onClick={() => setSelectedPosition(positionId)}
            className={themeTransitioning ? '' : 'no-transition'}
            onMouseOver={() => setHovering(true)}
            onMouseOut={() => setHovering(false)}
            onFocus={() => setHovering(true)}
            onBlur={() => setHovering(false)}
        >

            <Text
                className={themeTransitioning ? '' : 'no-transition'}
                color={selected || hovering ? 'standoutColor': 'baseColor'}
            >
                {position.title}
            </Text>
        </Box>
    )
}

export default PositionHeading;