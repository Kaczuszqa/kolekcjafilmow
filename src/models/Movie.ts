import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    genre: String,
    director: String,
    cast: [String],
    rating: Number,
    description: String,
});

export default mongoose.model('Movie', movieSchema);
