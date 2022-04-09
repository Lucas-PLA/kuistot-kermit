import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import TitleBar from './TitleBar';

export default {
	title: 'Composants/TitleBar',
	component: TitleBar
} as ComponentMeta<typeof TitleBar>;

const Template: ComponentStory<typeof TitleBar> = () => <TitleBar />;

export const Default = Template.bind({});
Default.args = {};