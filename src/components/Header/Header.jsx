import React, { useContext } from 'react';
import { Box, Button, ResponsiveContext } from 'grommet';
import './Header.scss'
import scrollIntoView from "../../utils/ScrollIntoView";
import * as Icons from "grommet-icons";

const Header = ({ pageRefs, toggleTheme }) => {

    const size = useContext(ResponsiveContext);

    if (size === 'small') {
        return (
            <Box as='header' margin={{top:'small'}} className={'mobileHeader'}>
                <Button icon={<Icons.View />} onClick={toggleTheme} />
            </Box>
        )
    }

    return (
        <Box
            as='header'
            direction='row-reverse'
            fill={'horizontal'}
            pad={{vertical: 'small'}}
            className='header'
        >
            <Button pad={{horizontal: 'large'}} secondary label='Contact' onClick={() => scrollIntoView(pageRefs.contact)} />
            <Button pad={{horizontal: 'large'}} secondary label='Projects' onClick={() => scrollIntoView(pageRefs.projects)} />
            <Button pad={{horizontal: 'large'}} secondary label='About' onClick={() => scrollIntoView(pageRefs.about)} />
        </Box>
    )
}

export default Header;