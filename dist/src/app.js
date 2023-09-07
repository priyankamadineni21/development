"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
//import router from "./routes/articles.routes";
const articles_routes_1 = __importDefault(require("./routes/articles.routes"));
const App = (options) => {
    const app = (0, fastify_1.default)(options);
    app.get("/", async () => "SERVER");
    app.register(articles_routes_1.default, { prefix: "/api/v1/articles" });
    return app;
};
exports.default = App;
