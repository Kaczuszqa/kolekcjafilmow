"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.getMovieById = exports.getMovies = exports.createMovie = void 0;
const Movie_1 = __importDefault(require("../models/Movie"));
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = new Movie_1.default(req.body);
        yield movie.save();
        res.status(201).json(movie);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.createMovie = createMovie;
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = {};
        if (req.query.genre)
            filter.genre = req.query.genre;
        if (req.query.releaseYear)
            filter.releaseYear = Number(req.query.releaseYear);
        const movies = yield Movie_1.default.find(filter);
        res.json(movies);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getMovies = getMovies;
const getMovieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = yield Movie_1.default.findById(req.params.id);
        if (!movie)
            return res.status(404).json({ error: 'Movie not found' });
        res.json(movie);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getMovieById = getMovieById;
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = yield Movie_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!movie)
            return res.status(404).json({ error: 'Movie not found' });
        res.json(movie);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.updateMovie = updateMovie;
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Movie_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: 'Movie deleted' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteMovie = deleteMovie;
