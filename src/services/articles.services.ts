export const getArticles = () => {
	const data = {
		id: "1",
		name: "node.js fastify",
		desc: "using services"
	}

	return { response: data }
}

export default {
	getArticles
}