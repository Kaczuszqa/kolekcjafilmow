import express from 'express';
import {
    createMovie,
    getMovies,
    getMovieById,
    updateMovie,
    deleteMovie,
} from '../controllers/moviesController';
import { addReview, getReviews } from '../controllers/reviewsController';

const router = express.Router();

router.post('/', createMovie);
router.get('/', getMovies);
router.get('/:id', getMovieById);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

router.post('/:id/reviews', addReview);
router.get('/:id/reviews', getReviews);

export default router;

