import React, { useState, useEffect } from 'react';

import TableRecette from './TableRecette';
import FormulaireRecette from './FormulaireRecette';

import { Recette } from 'types/recette.type';

import { getRecettes } from 'script/requests';

import './Recette.css';

function RecettePage() {
	const [recettes, setRecettes] = useState<Recette[]>([]);

	useEffect(() => {
        getRecettes().then(response => {
            setRecettes(response.data);
        });
    },
    []);

	const addNewRecette = (newRecette : Recette) => {
		setRecettes([...recettes, newRecette]);
	};

	return (
		<div id="Recette-page">
			<h1>Recettes</h1>
			<FormulaireRecette addRecette={addNewRecette}/>
			<TableRecette recettes={recettes} setRecettes={setRecettes}/>
		</div>
	);
}

export default RecettePage;