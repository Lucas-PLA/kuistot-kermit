import React, { useEffect, useState, useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { GlobalContext } from './GlobalContext';

// Composant de redirection vers une page d'authentification
// Le composant doit redirigé vers la route requêtée une fois l'authentification faite
function RequireAuth({children} : { children : JSX.Element}) {
	const location = useLocation();
	const context = useContext(GlobalContext);

	const [isAuthentified, setAuthentified] = useState<boolean>(context?.state.token != "");
	
	useEffect(() => {
		setAuthentified(context?.state.token != "");
	},
	[context?.state.token]);

	if(!isAuthentified) {
		return <Navigate to="/authent" state={{ from: location }} replace />;
	}

	return children;
}

export default RequireAuth;