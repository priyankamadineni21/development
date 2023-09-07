"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ar_controllers_1 = __importDefault(require("/home/priyanka2110/development/src/controllers/ar.controllers"));
const articleRouter = async (app) => {
    // route api app.method("path", {option}, handler)
    app.get("/", 
    // function handler
    ar_controllers_1.default.handleGetArticle);
};
exports.default = articleRouter;
