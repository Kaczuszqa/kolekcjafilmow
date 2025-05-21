"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    genre: String,
    director: String,
    cast: [String],
    rating: Number,
    description: String,
});
exports.default = mongoose_1.default.model('Movie', movieSchema);
