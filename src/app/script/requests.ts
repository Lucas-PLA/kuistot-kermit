import axios from 'axios';

export const AUTHENTICATE  = '/authenticate';

// requête de récupération du jeton d'authentification
export const authenticate = (user : string, password : string) => axios.post(AUTHENTICATE, {username: user, password: password})
	.then(response => {
		console.log(response);
		return response;
	})
	.catch(error => console.log(error));