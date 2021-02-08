import React from 'react';
import { Box, Text } from "grommet";

const Footer = ({ bottomRef }) => {
    return (
        <Box flex={false} ref={bottomRef}>
            <Text color={'baseColor'}>
                Created by Tyler Laporte
            </Text>
        </Box>
    )
}

export default Footer;