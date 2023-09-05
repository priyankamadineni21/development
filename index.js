"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var app_1 = require("./src/app");
var app = (0, app_1.default)({
    logger: true
});
var PORT = 2000;
app.listen({ port: Number(PORT) }, function (err) {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info("SERVE ON ".concat(PORT));
});
