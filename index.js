import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import goalRoutes from './backend/routes/goalRoutes.js';
import userRoutes from './backend/routes/userRoutes.js';
import { errorHandler } from './backend/middleware/errorMiddleware.js';
import connectDB from './backend/config/db.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connectDB();

app.use('/api/goals', goalRoutes);
app.use('/api/user', userRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('running homepage ');
  });
}

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
