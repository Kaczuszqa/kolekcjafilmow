import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movies';
import reviewRoutes from './routes/reviews';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/movies-api');

app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);

app.get('/', (req, res) => {
    res.send('Movies API is running 🚀');
});

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

export default app;

