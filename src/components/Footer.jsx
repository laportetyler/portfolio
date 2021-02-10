import React, { useContext } from 'react';
import { Box, Button, ResponsiveContext, Text } from "grommet";
import contact from "../content/contact.json";
import * as Icons from "grommet-icons";

const Footer = ({ bottomRef }) => {

    const size = useContext(ResponsiveContext);

    return (

        <Box flex align={'center'} justify={'end'} ref={bottomRef}>

            { size === 'small' &&
                <Box direction='row' fill={'horizontal'} pad={'small'} align={'center'}>
                    <Button margin={{horizontal:'medium'}} href={contact.linkedInUrl} target={'_blank'} icon={<Icons.LinkedinOption/>}/>
                    <Button margin={{horizontal:'medium'}} href={contact.gitHubUrl} target={'_blank'} icon={<Icons.Github/>}/>
                    <Button margin={{horizontal:'medium'}} href={`mailto:${contact.email}`} icon={<Icons.MailOption/>}/>
                </Box>
            }

            <Text color={'baseColor'} margin={{bottom: 'small'}} >
                Created by Tyler Laporte
            </Text>
        </Box>
    )
}

export default Footer;