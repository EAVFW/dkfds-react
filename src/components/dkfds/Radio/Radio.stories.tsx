import React, {useState} from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from './Radio';

export default {
    title: 'DKFDS/Radio',
    component: Radio,
} as ComponentMeta<typeof Radio>



const Template: ComponentStory<typeof Radio> = (args) => {
    const [result, setResult] = useState("");

    return (
        <>
            <Radio label="Gender chooser" options={["Male", "Female", "None", "Other"]} setChoice={setResult} />
            <p>The cosen one is <b>{ result }</b></p>
        </>
    );
}

export const Primary = Template.bind({});
