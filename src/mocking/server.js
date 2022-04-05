import { createServer } from 'miragejs';

import { AUTHENTICATE } from 'script/requests';

export function makeServer({environment = "development"}) {
	let server = createServer({
		environment,
		routes() {
			this.post(AUTHENTICATE, () => {return {token: 'kermit'};});
		}
	});

	return server;
}