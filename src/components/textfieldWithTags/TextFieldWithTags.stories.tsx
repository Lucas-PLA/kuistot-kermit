import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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