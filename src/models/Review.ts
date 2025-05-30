import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    author: String,
    content: String,
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Review', reviewSchema);

