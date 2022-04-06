import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Authent from 'pages/authent/Authent';
import Recette from 'pages/recettes/Recette';
import Menu from 'pages/menu/Menu';

import RequireAuth from 'utils/RequireAuth';
import GlobalContextProvider from 'utils/GlobalContext';
import * as AppRoutes from 'utils/routes.const';

function App() {

	return (
		<GlobalContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path={AppRoutes.ROUTE_RECETTES} element={<RequireAuth><Recette /></RequireAuth>} />
					<Route path={AppRoutes.ROUTE_MENU} element={<RequireAuth><Menu /></RequireAuth>} />
					<Route path={AppRoutes.ROUTE_AUTHENT} element={<Authent />} />
					<Route path={AppRoutes.BASE_ROUTE} element={<RequireAuth><Menu /></RequireAuth>} />
				</Routes>
			</BrowserRouter>
		</GlobalContextProvider>
	);
}

export default App;