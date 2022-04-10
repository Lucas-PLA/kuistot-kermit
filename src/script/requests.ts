import axios, { AxiosResponse } from 'axios';
import { Recette } from "types/recette.type";
import { Token } from 'types/requests.type';

import * as URL from 'const/routes.const';

// requête de récupération du jeton d'authentification
export const authenticate = (user : string, password : string) : Promise<AxiosResponse<Token>> => {
	return axios.post(URL.AUTHENTICATE, {username: user, password: password});
};

export const pushNewRecette = (recette: Recette) => {
	return axios.post(URL.RECETTE + "/" + recette.id, recette);
};

export const deleteRecette = (idRecette: string) => {
	return axios.delete(URL.RECETTE + "/" + idRecette);
};

export const getRecettes = () : Promise<AxiosResponse<Recette[]>> => {
	return axios.get(URL.RECETTE);
};