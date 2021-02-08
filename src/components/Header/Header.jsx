import React from 'react';
import { Box, Button } from 'grommet';
import { Notification, View } from "grommet-icons";
import './Header.scss'

const Header = ({ pageRefs }) => {

    const scrollTo = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <Box
            as='header'
            direction='row-reverse'
            pad={{vertical: 'small'}}
            className='header'
        >
            <Button pad={{horizontal: 'large'}} secondary label='Contact' onClick={() => scrollTo(pageRefs.contact)} />
            <Button pad={{horizontal: 'large'}} secondary label='Projects' onClick={() => scrollTo(pageRefs.projects)} />
            <Button pad={{horizontal: 'large'}} secondary label='About' onClick={() => scrollTo(pageRefs.about)} />
        </Box>
    )
}

export default Header;