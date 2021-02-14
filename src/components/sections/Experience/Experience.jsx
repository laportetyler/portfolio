import React, { useContext, useState } from 'react';
import { Box, ResponsiveContext } from "grommet";
import '../../../../node_modules/rc-tabs/assets/index.css'
import jobs from "../../../content/experience.json";
import SectionHeading from "../../SectionHeading/SectionHeading";
import PositionHeadings from "./PositionHeadings";
import Positions from "./Positions";

const Experience = ({experienceRef}) => {

    const mobileView = useContext(ResponsiveContext) === 'small';
    const [selectedPosition, setSelectedPosition] = useState(0);

    return (
        <Box flex={false} ref={experienceRef} width={'xlarge'}  >
            <SectionHeading fitContent>Experience</SectionHeading>
            <Box flex={false} margin={{top: 'small'}} direction={mobileView ? 'column' : 'row'} >
                <PositionHeadings jobs={jobs} selectedPosition={selectedPosition} setSelectedPosition={setSelectedPosition} />
                <Positions jobs={jobs} selectedPosition={selectedPosition} />
            </Box>
        </Box>
    )
}

export default Experience;