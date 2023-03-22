import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Button, ButtonVariantType} from './Button';

export default {
    title: 'DKFDS/Button',
    component: Button,
    argTypes: {
    },
    args: {
        primary: true
    }
} as ComponentMeta<typeof Button>
//@ts-ignore
const Template: ComponentStory<typeof Button> = ({label, ...args}) => <Button {...args}></Button>;

export const Print = Template.bind({});
Print.args = {
    icon: "print",
    children: "Print"
}
export const IconOnly = Template.bind({});
IconOnly.args = {
    icon: "delete",
    iconOnly: true,
}
