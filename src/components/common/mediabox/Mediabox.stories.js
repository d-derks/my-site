import React from 'react';
import Mediabox from './Mediabox';
import lorem from "../../../utils/Lorem";


export default {
    component: Mediabox,
    title: 'Components/Common/Mediabox',
};

const Template = args => <Mediabox {...args} />;

export const Default = Template.bind({});

Default.args = {
    img: lorem.image(1180, 500),
    ratio: '2-1',
    alt: '',
};


export const Ratio_2_1 = Template.bind({});
Ratio_2_1.args = {
    label: 'Ratio 2-1',
    ratio: '2-1',
    img: lorem.image(1180, 590),
};

export const Ratio_1_1 = Template.bind({});
Ratio_1_1.args = {
    label: 'Ratio 1-1',
    ratio: '1-1',
    img: lorem.image(1180, 1180),
};

export const Ratio_16_7 = Template.bind({});
Ratio_16_7.args = {
    label: 'Ratio 16-7',
    ratio: '16-7',
    img: lorem.image(1180, 516),
};
