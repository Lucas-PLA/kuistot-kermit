import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Authent from 'pages/authent/Authent';
import Recette from 'pages/recettes/Recette';
import Menu from 'pages/menu/Menu';

import RequireAuth from 'utils/RequireAuth';
import GlobalContextProvider from 'utils/GlobalContext';

//TODO : passer par un switch ?

function App() {

	return (
		<GlobalContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='recette' element={<RequireAuth><Recette /></RequireAuth>} />
					<Route path='' element={<RequireAuth><Menu /></RequireAuth>} />
					<Route path='authent' element={<Authent />} />
				</Routes>
			</BrowserRouter>
		</GlobalContextProvider>
	);
}

export default App;