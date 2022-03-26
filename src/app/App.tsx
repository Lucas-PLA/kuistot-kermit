import React from 'react';
import Authent from './pages/authent/Authent';
import Recette from './pages/recettes/Recette';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/menu/Menu';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='authent' element={<Authent />} />
				<Route path='recette' element={<Recette />} />
				<Route path='' element={<Menu />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
