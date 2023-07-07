import cors from 'cors';
import express from 'express';
import authRoutes from './routes/auth.js';
import postsRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);

app.listen(7000, () => {
  console.log('Server Connected!');
});
