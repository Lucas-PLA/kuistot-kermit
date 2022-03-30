import React from 'react';
import Authent from './pages/authent/Authent';
import Recette from './pages/recettes/Recette';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/menu/Menu';
import RequireAuth from './utils/requireAuth';

//TODO : passer par un switch ?

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='recette' element={<RequireAuth><Recette /></RequireAuth>} />
				<Route path='' element={<RequireAuth><Menu /></RequireAuth>} />
				<Route path='authent' element={<Authent />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
