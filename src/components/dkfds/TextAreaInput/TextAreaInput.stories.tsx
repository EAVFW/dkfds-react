import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextAreaInput from './TextAreaInput';

export default {
    title: 'DKFDS/TextAreaInput',
    component: TextAreaInput,
} as ComponentMeta<typeof TextAreaInput>

const Template: ComponentStory<typeof TextAreaInput> = (args) => <TextAreaInput {... args}></TextAreaInput>;

export const Primary = Template.bind({});
