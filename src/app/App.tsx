import React from "react";
import Authent from "./pages/authent/Authent";
import Recette from "./pages/recettes/Recette";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='authent' element={<Authent />} />
				<Route path='recette' element={<Recette />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
