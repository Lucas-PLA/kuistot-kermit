import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Authent from 'pages/authent/Authent';
import RecettePage from 'pages/recettes/RecettePage';
import Menu from 'pages/menu/Menu';
import Navbar from 'components/navbar/Navbar';
import TitleBar from 'components/titleBar/TitleBar';

import RequireAuth from 'utils/RequireAuth';
import GlobalContextProvider from 'utils/GlobalContextProvider';
import ErrorBoundary from 'utils/ErrorBoundary';
import * as AppRoutes from 'const/routes.const';

import './App.css';

function App() {

	return (
		<ErrorBoundary fallBackUI={<p>merde, tout est pêté</p>}>
			<GlobalContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path={AppRoutes.ROUTE_AUTHENT} element={<Authent />} />
						<Route path='*' element={<RequireAuth><AppWhileAuthenticated /></RequireAuth>} />
					</Routes>
				</BrowserRouter>
			</GlobalContextProvider>
		</ErrorBoundary>
	);
}

function AppWhileAuthenticated() {
	return (
		<div id="app">
			<TitleBar />
			<ErrorBoundary fallBackUI={<p>Erreur lors du chagement de la page</p>}>
				<div id="app-without-titlebar">
					<Navbar />
					<Routes>
						<Route path={AppRoutes.ROUTE_RECETTES} element={<RequireAuth><RecettePage /></RequireAuth>} />
						<Route path={AppRoutes.ROUTE_MENU} element={<RequireAuth><Menu /></RequireAuth>} />
						<Route path='*' element={<RequireAuth><Menu /></RequireAuth>} />
					</Routes>
				</div>
			</ErrorBoundary>
		</div>
	);
}
export default App;