import React from 'react';
import { Box, Text } from "grommet";

const ProjectTechnology = ({ headerText, standoutColor, technology }) => {
    return (
        <Box className={'project-technology'}
             border={{ color: standoutColor, size: 'small'}} >
            <Text color={headerText} >{ technology }</Text>
        </Box>
    )
}

export default ProjectTechnology;