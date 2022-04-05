import React from 'react';

import DateTime from 'luxon';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import { Menu, Recette } from '../types/recette.type';

import './DayMenu.css';

function DayMenu({date, starter, mainCourse, dessert}: Menu) {

    return(
        <Card id="dayMenu-card">
            <CardActionArea>
                <Title date={date} />
                <div id="card-content">
                    <ServiceMenu name="entrée" plats={starter} />
                    <hr />
                    <ServiceMenu name="plat" plats={mainCourse} />
                    <hr />
                    <ServiceMenu name="dessert" plats={dessert} />
                </div>
            </CardActionArea>
        </Card>
    );
}

export default DayMenu;

interface ServiceMenuProps {
    name: "entrée" | "plat" | "dessert";
    plats: Recette[];
}

function ServiceMenu({ name, plats } : ServiceMenuProps) {
    return (
        <>
            <h2 className="service-title">{name}</h2>
            <ul>
                {plats.map((plat) => 
                    <li key={plat.id}>{plat.name}</li>
                )}
            </ul>
        </>
    );
}

function Title({date}: {date: string}) {

    // probleme dans les types avec Luxon
    // const formatedDate : string = (DateTime as any).fromFormat(date, "YYYY-MM-DD").setLocale('fr').toLocaleString((DateTime as any).DATE_FULL);
    const formatedDate = date;

    return (
        <div id="card-title">
            <h1>{formatedDate}</h1>
        </div>
    );
}