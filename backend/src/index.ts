import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRouter from './routes/users';
import presetsRouter from './routes/presets';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', usersRouter);
app.use('/api/presets', presetsRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
