import React from 'react';
import { Chart, Nav } from "grommet";

const SideBar = ({ children, className }) => {

    return (
        <Nav direction='column' className={className}>
            {children}
        </Nav>
    )
}

export default SideBar;