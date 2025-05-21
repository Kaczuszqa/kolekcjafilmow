import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movies';
import reviewRoutes from './routes/reviews';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/movies-api');

app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);

app.get('/', (req, res) => {
    res.send('Movies API is running 🚀');
});

export default app;
