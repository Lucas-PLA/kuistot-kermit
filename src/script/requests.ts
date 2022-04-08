import axios from 'axios';
import { Recette } from "types/recette.type";

import * as URL from 'const/routes.const';

// requête de récupération du jeton d'authentification
export const authenticate = (user : string, password : string) => {
	return axios.post(URL.AUTHENTICATE, {username: user, password: password});
};

export const pushNewRecette = (recette: Recette) => {
	return axios.post(URL.RECETTE + "/" + recette.id, recette);
};

export const getRecettes = () => {
	return axios.get(URL.RECETTE);
};