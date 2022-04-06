import React from 'react';

import DateTime from 'luxon';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import { Menu, Recette } from 'types/recette.type';

import './DayMenu.css';

function DayMenu({date, starter, mainCourse, dessert}: Menu) {

    return(
        <Card id="day-menu__card">
            <CardActionArea>
                <Title date={date} />
                <div id="day-menu__card-content">
                    <ServiceMenu name="entrée" plats={starter} />
                    <hr className='day-menu__hr'/>
                    <ServiceMenu name="plat" plats={mainCourse} />
                    <hr className='day-menu__hr'/>
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
            <h2 className="day-menu__service-title">{name}</h2>
            <ul className="day-menu__ul">
                {plats.map((plat) => 
                    <li key={plat.id} className="day-menu__li">{plat.name}</li>
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
        <div id="day-menu__card-title">
            <h1>{formatedDate}</h1>
        </div>
    );
}