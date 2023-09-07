/*
import { articleService } from "../services";
export const handleGetArticle = () => {
	// mockup data
	const article = {
		id: "1",
		name: "node.js fastify",
		desc: "using controllers "
	}
	return {
		// mockup data
		articles: [
			article
		]
	}
	

	
	const response = articleService.getArticles();
	return articleService.getArticles();
}


export default {
	handleGetArticle
}
*/
import { cafeService } from "../services";

export const handleGetArticle = () => {
	return cafeService.getArticles()
}

export default {
	handleGetArticle
}

