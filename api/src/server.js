import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/index.js';
import appRoutes from './routes/index.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get("/", (req, res)=> res.send("Live"))
app.use('/api', appRoutes);

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
