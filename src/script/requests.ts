import axios from 'axios';
import { Recette } from "types/recette.type";

import { AUTHENTICATE, PUSH_NEW_RECETTE } from 'const/routes.const';

// requête de récupération du jeton d'authentification
export const authenticate = (user : string, password : string) => {
	return axios.post(AUTHENTICATE, {username: user, password: password});
};

export const pushNewRecette = (recette: Recette) => {
	return axios.post(PUSH_NEW_RECETTE + "/" + recette.id, recette);
}