import React, { useEffect, useState } from 'react';

import { useLocation, Navigate } from 'react-router-dom';

// Composant de redirection vers une page d'authentification
// Le composant doit redirigé vers la route requêtée une fois l'authentification faite
function RequireAuth({children} : { children : JSX.Element}) {
	const location = useLocation();

	const [isAuthentified, setAuthentified] = useState<boolean>(false);
	// TODO : remettre ça au propre ?
	useEffect(() => {
		window.addEventListener('storage', () => {if(localStorage.getItem("auth-token")) setAuthentified(true);});
		return () => window.removeEventListener('storage', () => {if(localStorage.getItem("auth-token")) setAuthentified(true);});
	},
	[]);

	if(isAuthentified) {
		return <Navigate to="/authent" state={{ from: location }} replace />;
	}

	return children;
}

export default RequireAuth;