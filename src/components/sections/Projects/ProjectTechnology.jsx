import React from 'react';
import { Box, Text } from "grommet";

const ProjectTechnology = ({ headerText, technology }) => {
    return (
        <Box className={'project-technology'}
             border={{ color: headerText, size: 'small'}}
             background={{color: headerText, opacity: 0.1}}
        >
            <Text color={headerText} >{ technology }</Text>
        </Box>
    )
}

export default ProjectTechnology;