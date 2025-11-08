import cors from 'cors';
import "dotenv/config";
import express from 'express';
import morgan from 'morgan';
import { PORT } from './src/config/index.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import appRoutes from './src/routes/index.js';



const app = express();
app.use(
  cors({
    origin: ["*"],        
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(morgan('dev'));

app.get("/", (req, res)=> res.send("Live working"))
app.use('/api', appRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
