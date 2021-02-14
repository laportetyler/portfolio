import React, { useContext } from 'react';
import './SideBars.scss'
import SideBar from "./SideBar";
import { Button } from "grommet";
import * as Icons from "grommet-icons";
import scrollIntoView from "../../utils/ScrollIntoView";
import ThemeContext from "../../context/ThemeContext";

const ActionsSideBar = ({ pageRefs }) => {

    const { currentTheme } = useContext(ThemeContext);

    return (
        <SideBar className='actionsSideBar'>
            <Button className={'icon-transition'} icon={<Icons.CaretUp />}  onClick={() => scrollIntoView(pageRefs.top)} />
            <Button className={'icon-transition'} icon={<Icons.View />} onClick={currentTheme.toggle} />
            <Button className={'icon-transition'} icon={<Icons.CaretDown />} onClick={() => scrollIntoView(pageRefs.bottom)} />
        </SideBar>
    )
}

export default ActionsSideBar;