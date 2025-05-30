import { Request, Response } from 'express';
import Review from '../models/Review';

export const addReview = async (req: Request, res: Response) => {
    try {
        const review = new Review({ ...req.body, movieId: req.params.id });
        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message });
    }
};

export const getReviews = async (req: Request, res: Response) => {
    try {
        const reviews = await Review.find({ movieId: req.params.id });
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

export const updateReview = async (req: Request, res: Response) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) return res.status(404).json({ error: 'Review not found' });
        res.json(review);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message });
    }
};

export const deleteReview = async (req: Request, res: Response) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
        res.json({ message: 'Review deleted' });
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

