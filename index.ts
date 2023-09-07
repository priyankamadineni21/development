/*console.log()
import Fastify from "fastify";
console.log("FOo")
// const fastify = Fastify({logger :true});
const app = Fastify();
// app.get("/", async () => "SERVER");
const PORT = 5000;
console.log(PORT);
app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    console.log(`SERVE ON ${PORT}`)
})
*/
//import articleRouter from "/home/priyanka2110/development/src/routes/articles.routes";
//------------------------actual-----------------------------------------

import db from "./src/models";
import App from "./src/app";
import config from "./src/config/config";
//import { createConnection } from "typeorm";
const app = App({
	logger: true
})
/*createConnection({
	type:'postgres',

})
*/
//const PORT = 2000
const PORT: string | number = config.port

db.sequelize.sync().then(() =>{
app.listen({port:Number(PORT)}, (err:any) => {
	if (err) {
		app.log.error(err);
		// process.exit(1)
	}
	app.log.info(`SERVE ON ${PORT}`)
})
})