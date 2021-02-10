import React, { useContext } from 'react';
import { Box, Nav, ResponsiveContext } from "grommet";

const SideBar = ({ children, className }) => {

    const size = useContext(ResponsiveContext);

    if (size === 'small') {
        return (
            <Box fill={'vertical'} pad={{horizontal: '20px'}} />
        )
    }

    return (
        <Box>
            <Box fill={'vertical'} pad={{horizontal: 'large'}} />
            <Nav direction='column' className={className}>
                {children}
            </Nav>
        </Box>

    )
}

export default SideBar;