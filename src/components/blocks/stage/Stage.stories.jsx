import React from 'react';
import Stage from './Stage';
import StageIntro from './stageIntro/StageIntro';


export default {
    component: Stage,
    title: 'Components/Blocks/Stage',
};

export const Default = () => {

    return (
        <Stage>
            <StageIntro
                title="I AM"
                text="a frontend developer from Kreuzberg"
            />
        </Stage>
    );
};

