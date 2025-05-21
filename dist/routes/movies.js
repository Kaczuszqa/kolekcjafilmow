"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moviesController_1 = require("../controllers/moviesController");
const reviewsController_1 = require("../controllers/reviewsController");
const router = express_1.default.Router();
router.post('/', moviesController_1.createMovie);
router.get('/', moviesController_1.getMovies);
router.get('/:id', moviesController_1.getMovieById);
router.put('/:id', moviesController_1.updateMovie);
router.delete('/:id', moviesController_1.deleteMovie);
router.post('/:id/reviews', reviewsController_1.addReview);
router.get('/:id/reviews', reviewsController_1.getReviews);
exports.default = router;
