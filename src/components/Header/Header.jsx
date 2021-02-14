import React, { useContext } from 'react';
import { Box, Button, ResponsiveContext } from 'grommet';
import './Header.scss'
import scrollIntoView from "../../utils/ScrollIntoView";
import * as Icons from "grommet-icons";
import ThemeContext from "../../context/ThemeContext";

const Header = ({ pageRefs }) => {

    const size = useContext(ResponsiveContext);
    const { currentTheme } = useContext(ThemeContext);

    if (size === 'small') {
        return (
            <Box className={'mobile-header'} >
                <Button color={'standoutColor'} icon={<Icons.View className={'icon-transition'} size={'25px'} />} onClick={currentTheme.toggle} />
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
            <Button pad={{horizontal: 'large'}} secondary label='Experience' onClick={() => scrollIntoView(pageRefs.experience)} />
            <Button pad={{horizontal: 'large'}} secondary label='About' onClick={() => scrollIntoView(pageRefs.about)} />
        </Box>
    )
}

export default Header;