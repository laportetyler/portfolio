import React, { useContext } from 'react';
import { Box, Paragraph, ResponsiveContext, Stack } from 'grommet';
import styled from 'styled-components';
import { FormNext } from 'grommet-icons';

const Positions = ({jobs, selectedPosition}) => {

    const mobileView = useContext(ResponsiveContext) === 'small';

    if (!jobs) {
        return null;
    }

    const positions = [];
    jobs.forEach((job) => {
        if (job.positions) {
            positions.push(...job.positions);
        }
    })

    return (
        <Box margin={mobileView ? {vertical: 'small'} : {vertical: '36px'}} border={ mobileView ? '' : {color: 'headerText', side:'top', size: 'medium'}} >
            <Stack interactiveChild={selectedPosition} margin={ mobileView ? 'none' : {left: 'medium', top: '8px' }} >

                {positions && positions.map((position, positionId) => {

                    const selected = selectedPosition === positionId;

                    const Position = styled(Box)`
                            visibility: ${selected ? 'visible' : 'hidden'};
                        `;

                    return (
                        <Position>
                            {
                                position.descriptions && position.descriptions.map((description) => {
                                        return (
                                            <Box direction={'row'}>
                                                <Box flex={false} margin={{top: '1em'}}>
                                                    <FormNext color={'standoutColor'} margin={'small'}/>
                                                </Box>
                                                <Paragraph margin={{left: 'medium', bottom: 'none'}} color={'baseColor'}
                                                           fill> {description}</Paragraph>
                                            </Box>
                                        )
                                    }
                                )
                            }
                        </Position>
                    )
                })}
            </Stack>
        </Box>

    );

}

export default Positions;