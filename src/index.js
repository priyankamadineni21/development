/*const fastify = require('fastify')

const app = fastify({logger:true})

const PORT = process.env.PORT || 8000

app.get('/hello', (request, reply) => {
    return 'Hello world'
})


app.listen(PORT).catch((error) => {
    app.log.error(error)
    process.exit()

})
*/

//const studentsRoutes = require("./students/routes.js")


//fastify.register(require("/home/priyanka2110/development/node_modules/fastify/lib/route.js"));
/*const items = require('./items')
fastify.get('/items', (req, reply) => {
    reply.send(items)
})
*/
//fastify.register(require('/home/priyanka2110/development/src/inde.js'));


const fastify = require('fastify')({
    logger: true
});
const PORT=5000;
// const studentsRoutes = require("./students/routes");

fastify.register(require("./students/routes"))

fastify.get("/api/v1/students", (req, reply) => {
    reply.send({message: "done"})
})

const start = async () => {
    try{
        await fastify.listen({

        port: PORT})
    } catch (error){
        fastify.log.error(error)
        process.exit(1)
    }
}

start()