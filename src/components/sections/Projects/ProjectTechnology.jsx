import React from 'react';
import { Box, Text } from "grommet";

const ProjectTechnology = ({ headerText, technology }) => {
    return (
        <Box className={'project-technology'}
             border={{ color: headerText, size: 'small'}} >
            <Text color={headerText} >{ technology }</Text>
        </Box>
    )
}

export default ProjectTechnology;