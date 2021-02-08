import React  from 'react';
import './SideBars.scss'
import SideBar from "./SideBar";
import { Button } from "grommet";
import * as Icons from "grommet-icons";

const ActionsSideBar = ({ toggleTheme, top, bottom }) => {

    const scrollTo = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <SideBar className='actionsSideBar'>
            <Button icon={<Icons.CaretUp />}  onClick={() => scrollTo(top)} />
            <Button icon={<Icons.View />} onClick={toggleTheme} />
            <Button icon={<Icons.CaretDown />} onClick={() => scrollTo(bottom)} />
        </SideBar>
    )
}

export default ActionsSideBar;