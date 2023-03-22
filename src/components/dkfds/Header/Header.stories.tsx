import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';

export default {
    title: 'DKFDS/Header',
    component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header></Header>;

export const Primary = Template.bind({});