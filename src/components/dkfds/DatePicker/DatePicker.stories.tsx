import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import DatePicker from './DatePicker';

export default {
    title: 'DKFDS/DatePicker',
    component: DatePicker,
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {... args}></DatePicker>;

export const Primary = Template.bind({});
