import React, { useContext } from 'react';
import { Box, Button, ResponsiveContext } from 'grommet';
import './Header.scss'
import scrollIntoView from "../../utils/ScrollIntoView";
import styled from "styled-components";
import * as Icons from "grommet-icons";
import ThemeContext from "../../context/ThemeContext";

const Header = ({ pageRefs }) => {

    const size = useContext(ResponsiveContext);
    const { currentTheme } = useContext(ThemeContext);

    const MobileHeader = styled(Box)`
        z-index: 1;
        position: absolute;
        top: 0;
        right: 0;
        
        button {
            padding: 0;
            margin-top: 20px;
            margin-right: 8px;
        }
    `;

    if (size === 'small') {
        return (
            <MobileHeader as='header' >
                <Button color={'standoutColor'} icon={<Icons.View size={'25px'} />} onClick={currentTheme.toggle} />
            </MobileHeader>
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