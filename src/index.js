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
const fastify = require('fastify')({logger: true})
const PORT=5000
const items = require('./items')
fastify.get('/items', (req, reply) => {
    reply.send(items)
})

const start = async () => {
    try{
        await fastify.listen({
            port: PORT
        })
    } catch (error){
        fastify.log.error(error)
        process.exit(1)
    }
}

start()