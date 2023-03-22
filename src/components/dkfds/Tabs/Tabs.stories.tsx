import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from './Tabs';

export default {
    title: 'DKFDS/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {... args}></Tabs>;

export const Primary = Template.bind({});
