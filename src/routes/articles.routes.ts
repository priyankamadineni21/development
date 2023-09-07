/*import { FastifyInstance } from "fastify"; // import FastifyInstance
 import articleController from 'src/controllers/ar.controllers';

const articleRouter = async (app: FastifyInstance) => {
	// route api app.method("path", {option}, handler)
	// create .get route endpoint for article route that '/'
	// mockup data
	const article = {
		id: "1",
		name: "node.js fastify",
		desc: "going fasting with jumping course 0 to 100 ><"
	}
	app.get(
		"/",
		// function handler: RouteHandlerMethod<RawServerDefau lt, IncomingMessage, ServerResponse<IncomingMessage>, RouteGenericInterface, unknown, FastifySchema, FastifyTypeProviderDefault, FastifyBaseLogger>):
		//articleController.handleGetArticle;
		() => {
			return {
				// mockup data
				articles: [
					article
				]
			}
		}
	);
};

export default articleRouter;
*/
import { FastifyInstance } from "fastify"; // import FastifyInstance
import cafeController from '/home/priyanka2110/development/src/controllers/ar.controllers';

const cafeRouter = async (app: FastifyInstance) => {
	// route api app.method("path", {option}, handler)
	app.get(
		"/",
		// function handler
		cafeController.handleGetArticle
	);
};

export default cafeRouter;