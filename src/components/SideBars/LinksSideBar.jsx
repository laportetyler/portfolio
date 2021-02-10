import React from 'react';
import './SideBars.scss'
import SideBar from "./SideBar";
import * as Icons from "grommet-icons";
import { Button } from "grommet";
import contact from '../../content/contact.json'

const LinksSideBar = () => {

    return (
        <SideBar className='linksSideBar'>
            <Button href={contact.linkedInUrl} target={'_blank'} icon={<Icons.LinkedinOption /> } />
            <Button href={contact.gitHubUrl} target={'_blank'} icon={<Icons.Github /> } />
            <Button href={`mailto:${contact.email}`} icon={<Icons.MailOption /> } />
        </SideBar>
    )
}

export default LinksSideBar;