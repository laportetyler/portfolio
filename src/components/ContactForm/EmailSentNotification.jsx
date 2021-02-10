import React, { Component } from 'react'
import Notification from "../Notification";
import { Box, Text } from "grommet";
import { StatusGood } from "grommet-icons";

export const EmailSentNotification = ({ onClose }) => (
    <Notification onClose={onClose} duration={1500}>
        <Box
            direction="row"
            align="center"
            justify="between"
            gap="small"
            round
            pad="small"
            background={'successNotification'}
        >
            <Text color={'background'} >Message Sent!</Text>
            <StatusGood color={'background'} />
        </Box>
    </Notification>
);

export default EmailSentNotification;