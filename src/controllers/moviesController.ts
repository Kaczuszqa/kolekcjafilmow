import { Request, Response } from 'express';
import Movie from '../models/Movie';

export const createMovie = async (req: Request, res: Response) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json(movie);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message });
    }
};

export const getMovies = async (req: Request, res: Response) => {
    try {
        const filter: any = {};
        if (req.query.genre) filter.genre = req.query.genre;
        if (req.query.releaseYear) filter.releaseYear = Number(req.query.releaseYear);

        const movies = await Movie.find(filter);
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

export const getMovieById = async (req: Request, res: Response) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ error: 'Movie not found' });
        res.json(movie);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

export const updateMovie = async (req: Request, res: Response) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!movie) return res.status(404).json({ error: 'Movie not found' });
        res.json(movie);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message });
    }
};

export const deleteMovie = async (req: Request, res: Response) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({ message: 'Movie deleted' });
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};
