import fastify, { FastifyServerOptions } from "fastify";
//import router from "./routes/articles.routes";
import cafeRouter from "./routes/articles.routes";

const App = (options: FastifyServerOptions) => {
	const app = fastify(options)
	
	app.get("/", async () => "SERVER");
    app.register(cafeRouter, { prefix: "/api/v1/articles" });
	return app
}
export default App