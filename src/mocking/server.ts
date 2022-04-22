import { createServer, Model, Response } from 'miragejs';

import { createRecette, createMenu, Services } from 'tests/fixtureFactory';

import * as URL from 'const/routes.const';

export function makeServer({environment = "development"}) {
	const server = createServer({
		environment,

		models: {
			recettes: Model,
			menu: Model
		},
		seeds(server) {
			server.db.loadData({
				recettes: [
					createRecette(Services.entree),
					createRecette(Services.entree),
					createRecette(Services.plat),
					createRecette(Services.plat),
					createRecette(Services.dessert),
					createRecette(Services.dessert),
				]
			});

			server.db.loadData({
				menu: [
					createMenu(),
					createMenu(),
					createMenu(),
					createMenu(),
					createMenu(),
					createMenu(),
					createMenu()
				]
			});
		},

		routes() {
			this.post(URL.AUTHENTICATE, () => {return {token: 'kermit'};});
			
			this.post(`${URL.RECETTE}/:id`, (schema, request) => {
				const data = JSON.parse(request.requestBody);
				return schema.db.recettes.insert(data);
			});
			
			this.delete(`${URL.RECETTE}/:id`, (schema, request) => {
				schema.db.recettes.remove(request.params.id);
				return new Response(200);
			});
			
			this.get(URL.RECETTE, (schema) => {
				return schema.db.recettes;
			});

			this.get(`${URL.MENU}/:idSemaine`, (schema) => {
				return schema.db.menu;
			});
		}
	});

	return server;
}