"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticles = void 0;
var getArticles = function () {
    var data = {
        id: "1",
        name: "node.js fastify",
        desc: "using services"
    };
    return { response: data };
};
exports.getArticles = getArticles;
exports.default = {
    getArticles: exports.getArticles
};
