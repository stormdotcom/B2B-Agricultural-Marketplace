import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/index.js';
import requirementRoutes from './routes/requirementRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/requirements', requirementRoutes);

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
