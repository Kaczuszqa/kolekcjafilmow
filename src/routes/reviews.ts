import express from 'express';
import { updateReview, deleteReview } from '../controllers/reviewsController';

const router = express.Router();

router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;
