import express from 'express';
import authRoutes from './routes/auth.js';
import postsRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/posts', postsRoutes);
app.use('/user', userRoutes);

app.listen(7000, () => {
  console.log('Server Connected!');
});
