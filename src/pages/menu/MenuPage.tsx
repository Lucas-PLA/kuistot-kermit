import React, { useState, useEffect } from 'react';
import log from 'loglevel';

import { Menu } from 'types/recette.type';
import { getUserWeekMenu } from 'script/requests';

import DayMenu from 'components/dayMenu/DayMenu';

function MenuPage() {
	const [menuSemaine, setMenuSemaine] = useState<Menu[]>([]);

	useEffect(() => {
		getUserWeekMenu("TODO")
			.then(response => setMenuSemaine(verifyMenuData(response.data)))
			.catch(error => log.error(error));
	}, []);

	const verifyMenuData = (data: Menu[]) => {
		if(data.length > 7) log.warn("erreur lors de l'appel de récupération des menus : trop de menus retournés");
		if(data.length < 7) log.warn("erreur lors de l'appel de récupération des menus : pas assez de menus retournés");
		return (data.slice(0, 7));
	};

	return (
		<div css={{display: 'flex'}}>
			<h1>Mon menu</h1>
			<div css={{display: 'flex'}}>
				{menuSemaine.map((menuQuotidien, index) =>
					( (index < 4) && <DayMenu {...menuQuotidien} key={menuQuotidien.date}/> )
				)}
			</div>
			<div css={{display: 'flex'}}>
				{menuSemaine.map((menuQuotidien, index) =>
					(index > 4) && <DayMenu {...menuQuotidien} key={menuQuotidien.date}/>
				)}
			</div>
		</div>
	);
}

export default MenuPage;