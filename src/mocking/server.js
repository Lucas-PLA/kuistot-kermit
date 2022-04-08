import { createServer } from 'miragejs';

import * as URL from 'const/routes.const';

export function makeServer({environment = "development"}) {
	let server = createServer({
		environment,
		routes() {
			this.post(URL.AUTHENTICATE, () => {return {token: 'kermit'};});
			this.post(`${URL.RECETTE}/:id`, (schema, request) => {
				let data = JSON.parse(request.requestBody);
				return schema.db.recettes.insert(data);
			});
			this.get(URL.RECETTE, (schema) => {
				return schema.db.recettes;
			});
		}
	});

	return server;
}