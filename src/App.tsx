import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Authent from 'pages/authent/Authent';
import Recette from 'pages/recettes/Recette';
import Menu from 'pages/menu/Menu';
import Navbar from 'components/navbar/Navbar';

import RequireAuth from 'utils/RequireAuth';
import GlobalContextProvider from 'utils/GlobalContext';
import * as AppRoutes from 'utils/routes.const';

import './App.css';

function App() {

	return (
		<GlobalContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path={AppRoutes.ROUTE_AUTHENT} element={<Authent />} />
					<Route path='*' element={<RequireAuth><AppWhileAuthenticated /></RequireAuth>} />
				</Routes>
			</BrowserRouter>
		</GlobalContextProvider>
	);
}

function AppWhileAuthenticated() {
	console.log("authent");

	return(
		<div id="app">
			<Navbar />
			<Routes>
				<Route path={AppRoutes.ROUTE_RECETTES} element={<RequireAuth><Recette /></RequireAuth>} />
				<Route path={AppRoutes.ROUTE_MENU} element={<RequireAuth><Menu /></RequireAuth>} />
				<Route path='*' element={<RequireAuth><Menu /></RequireAuth>} />
			</Routes>
		</div>
	);
}
export default App;