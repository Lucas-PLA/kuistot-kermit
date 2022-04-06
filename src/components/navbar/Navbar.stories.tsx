import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar';

export default {
	title: 'Composants/Navbar',
	component: Navbar,
	decorators: [
		(Story : any) => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		)
	]
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar/>;

export const Default = Template.bind({});