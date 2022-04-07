import { createServer } from 'miragejs';

import { AUTHENTICATE, PUSH_NEW_RECETTE } from 'const/routes.const';

export function makeServer({environment = "development"}) {
	let server = createServer({
		environment,
		routes() {
			this.post(AUTHENTICATE, () => {return {token: 'kermit'};});
			this.post(PUSH_NEW_RECETTE, (schema, request) => {
				let data = JSON.parse(request.requestBody);
				return schema.db.recettes.insert(data);
			})
		}
	});

	return server;
}