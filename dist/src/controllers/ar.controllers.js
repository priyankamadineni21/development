"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetArticle = void 0;
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
const services_1 = require("../services");
const handleGetArticle = () => {
    return services_1.articleService.getArticles();
};
exports.handleGetArticle = handleGetArticle;
exports.default = {
    handleGetArticle: exports.handleGetArticle
};
