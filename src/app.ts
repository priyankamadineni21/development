import fastify, { FastifyServerOptions } from "fastify";
//import router from "./routes/articles.routes";
import cafeRouter from "./routes/articles.routes";
import sequelize from './models/index'

const App = (options: FastifyServerOptions) => {
	const app = fastify(options)
	
	app.get("/", async () => "SERVER");
	app.get("/cafeshop", async (req, reply) => {
		const rec = await sequelize.query(`select * from "cafeshop"`)
		reply.send(rec[0])
	})
    app.register(cafeRouter, { prefix: "/api/v1/articles" });
	return app
}
export default App