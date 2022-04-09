import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Authent from 'pages/authent/Authent';
import RecettePage from 'pages/recettes/RecettePage';
import Menu from 'pages/menu/Menu';
import Navbar from 'components/navbar/Navbar';

import RequireAuth from 'utils/RequireAuth';
import GlobalContextProvider from 'utils/GlobalContextProvider';
import * as AppRoutes from 'const/routes.const';

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
	return(
		<div id="app">
			<Navbar />
			<Routes>
				<Route path={AppRoutes.ROUTE_RECETTES} element={<RequireAuth><RecettePage /></RequireAuth>} />
				<Route path={AppRoutes.ROUTE_MENU} element={<RequireAuth><Menu /></RequireAuth>} />
				<Route path='*' element={<RequireAuth><Menu /></RequireAuth>} />
			</Routes>
		</div>
	);
}
export default App;