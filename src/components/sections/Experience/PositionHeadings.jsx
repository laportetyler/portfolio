import React from 'react'
import { Box, Text } from 'grommet';
import PositionHeading from "./PositionHeading";

const PositionHeadings = ({jobs, selectedPosition, setSelectedPosition}) => {

    let positionCount = 0;

    if (!jobs) {
        return null;
    }

    return (
        <Box flex={false} >
            {jobs && jobs.map((job, jobIndex) => {
                return (
                    <Box margin={{top: 'medium'}}>

                        <Box direction={'row'} >
                            <Box flex={false} >
                                <Text weight={'599'} margin={{bottom: 'small', right: 'small'}} color={'headerText'} size={'24px'}>
                                    {job.company}
                                </Text>
                            </Box>
                            {
                                jobIndex === 0 && <Box fill={'horizontal'} margin={{top: '12px'}} border={{color: 'headerText', side:'top', size:'medium'}} />
                            }
                        </Box>

                        <Box   >
                            {job.positions && job.positions.map((position) => {
                                return (
                                    <PositionHeading position={position}
                                                     positionId={positionCount++}
                                                     selectedPosition={selectedPosition}
                                                     setSelectedPosition={setSelectedPosition}
                                    />
                                )
                            })}
                        </Box>
                    </Box>
                )
            })}
        </Box>
    );

}

export default PositionHeadings;