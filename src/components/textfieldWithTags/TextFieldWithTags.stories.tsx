import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';

import TextFieldWithTags from './TextFieldWithTags';

export default {
    title: 'Composants/TextFieldWithTags',
    component: TextFieldWithTags
} as ComponentMeta<typeof TextFieldWithTags>;

const Template: ComponentStory<typeof TextFieldWithTags> = (args) => <TextFieldWithTags {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "label",
    buttonText: "ajouter",
    value: []
};

Default.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const textField = canvas.getByRole('textbox');
    await userEvent.type(textField, 'un tag', {delay: 100});

    const button = canvas.getByRole('button');
    await userEvent.click(button);
}