import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from './TextInput';

export default {
    title: 'DKFDS/TextInput',
    component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {... args}></TextInput>;

export const Primary = Template.bind({});
Primary.args = {
    label:"Here the label text should be"
}

export const WithHint = Template.bind({});
WithHint.args = {
    label:"Here the label text should be",
    hintText: "Should be a number"
}
