 const routes = async  (fastify) => {
    fastify.get("/src/students/routes",(req, res) => {
        res.send("using api route");
    });
}


module.exports = routes;

 /*
const { Router } = require("fastify")({logger: true});
const router = Router();

fastify.get("/", (req, res) => {
    res.send("using api route");
});
*/


