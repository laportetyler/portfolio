import React  from 'react';
import './SideBars.scss'
import SideBar from "./SideBar";
import { Button } from "grommet";
import * as Icons from "grommet-icons";
import scrollIntoView from "../../utils/ScrollIntoView";

const ActionsSideBar = ({ toggleTheme, top, bottom }) => {

    return (
        <SideBar className='actionsSideBar'>
            <Button icon={<Icons.CaretUp />}  onClick={() => scrollIntoView(top)} />
            <Button icon={<Icons.View />} onClick={toggleTheme} />
            <Button icon={<Icons.CaretDown />} onClick={() => scrollIntoView(bottom)} />
        </SideBar>
    )
}

export default ActionsSideBar;