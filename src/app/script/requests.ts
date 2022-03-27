import axios from 'axios';

export const AUTHENTICATE  = '/authenticate';

// TODO : type du token ??

// requête de récupération du jeton d'authentification
export const authenticate = (user : string, password : string) => axios.post(AUTHENTICATE, {username: user, password: password})
	.then(response => {
		localStorage.setItem("auth-token", response.data.token);
		console.log("storage", localStorage.getItem("auth-token"));
	})
	.catch(error => console.log(error));