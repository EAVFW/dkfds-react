import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Message from './Message';

export default {
    title: 'Message',
    component: Message,
} as ComponentMeta<typeof Message>

const Template: ComponentStory<typeof Message> = (args) => <Message {... args}></Message>;

export const Primary = Template.bind({});
