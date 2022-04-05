import axios from 'axios';

export const AUTHENTICATE  = '/authenticate';

// requête de récupération du jeton d'authentification
export const authenticate = (user : string, password : string) => {
	return axios.post(AUTHENTICATE, {username: user, password: password});
};