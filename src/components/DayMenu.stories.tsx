import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DayMenu from './DayMenu';
import { Menu, Recette } from 'types/recette.type';

// rajouter argType
export default {
    title: 'Composants/DayMenu',
    component: DayMenu
} as ComponentMeta<typeof DayMenu>;

const Template: ComponentStory<typeof DayMenu> = (args) => <DayMenu {...args} />;

export const Kermit = Template.bind({});
Kermit.args = {
    date: '2022-04-05',
    starter: [
        {
            id: "1",
            name: "lasagne",
            time: 30,
            price: 1,
            ingredients: ["sauce tomate", "pates"],
            recette: ["faire cuire les pâtes", "mettre la sauce tomate", "servir"]
        },
        {
            id: "2",
            name: "polenta",
            time: 30,
            price: 1,
            ingredients: ["polenta"],
            recette: ["faire cuire la polenta"]
        }
    ],
    mainCourse: [
        {
            id: "1",
            name: "lasagne",
            time: 30,
            price: 1,
            ingredients: ["sauce tomate", "pates"],
            recette: ["faire cuire les pâtes", "mettre la sauce tomate", "servir"]
        },
        {
            id: "2",
            name: "polenta",
            time: 30,
            price: 1,
            ingredients: ["polenta"],
            recette: ["faire cuire la polenta"]
        }
    ],
    dessert: [
        {
            id: "1",
            name: "lasagne",
            time: 30,
            price: 1,
            ingredients: ["sauce tomate", "pates"],
            recette: ["faire cuire les pâtes", "mettre la sauce tomate", "servir"]
        },
        {
            id: "2",
            name: "polenta",
            time: 30,
            price: 1,
            ingredients: ["polenta"],
            recette: ["faire cuire la polenta"]
        }
    ]
};