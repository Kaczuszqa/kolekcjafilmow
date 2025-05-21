"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const movies_1 = __importDefault(require("./routes/movies"));
const reviews_1 = __importDefault(require("./routes/reviews"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/movies-api');
app.use('/movies', movies_1.default);
app.use('/reviews', reviews_1.default);
app.get('/', (req, res) => {
    res.send('Movies API is running 🚀');
});
exports.default = app;
