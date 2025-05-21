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
exports.deleteReview = exports.updateReview = exports.getReviews = exports.addReview = void 0;
const Review_1 = __importDefault(require("../models/Review"));
const addReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = new Review_1.default(Object.assign(Object.assign({}, req.body), { movieId: req.params.id }));
        yield review.save();
        res.status(201).json(review);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.addReview = addReview;
const getReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield Review_1.default.find({ movieId: req.params.id });
        res.json(reviews);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getReviews = getReviews;
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield Review_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review)
            return res.status(404).json({ error: 'Review not found' });
        res.json(review);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.updateReview = updateReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Review_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: 'Review deleted' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteReview = deleteReview;
