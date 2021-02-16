import React, { useContext } from 'react';
import { Box, Paragraph, ResponsiveContext, Stack } from 'grommet';
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

    const PositionContainer = mobileView ? Box : Stack;

    return (
        <Box margin={mobileView ? {vertical: 'small'} : {vertical: '36px'}} border={ mobileView ? '' : {color: 'headerText', side:'top', size: '3px'}} >
            <PositionContainer flex={false} interactiveChild={selectedPosition} margin={ mobileView ? 'none' : {left: 'medium', top: '8px' }} >

                {positions && positions.map((position, positionId) => {

                    const selected = selectedPosition === positionId;
                    const containerClass = selected ? '' : mobileView ? 'display-none' : 'visibility-hidden'

                    return (
                        <Box className={containerClass} flex={false} >
                            {
                                position.descriptions && position.descriptions.map((description) => {
                                        return (
                                            <Box direction={'row'}>
                                                <Box
                                                    flex={false}
                                                    margin={mobileView ? {left: '-5px', top: '1em'} : {top: '1em'}}
                                                >
                                                    <FormNext className={'icon-transition'} margin={'small'} />
                                                </Box>
                                                <Paragraph
                                                    fill
                                                    color={'baseColor'}
                                                    size={'medium'}
                                                    margin={mobileView ? {left: '2px', bottom: 'none'} : {left: 'medium', bottom: 'none'}}
                                                >
                                                    {description}
                                                </Paragraph>
                                            </Box>
                                        )
                                    }
                                )
                            }
                        </Box>
                    )
                })}
            </PositionContainer>
        </Box>

    );

}

export default Positions;