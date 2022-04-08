import React from 'react';

import TableRecette from './TableRecette';
import FormulaireRecette from './FormulaireRecette';

import './Recette.css';

function Recette() {
	return (
		<div id="Recette-page">
			<h1>Recettes</h1>
			<FormulaireRecette />
			<TableRecette />
		</div>
	);
}

export default Recette;