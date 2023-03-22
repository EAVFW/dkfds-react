import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Accordion from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}></Accordion>;

export const Primary = Template.bind({});