import express from 'express';
import { farmers } from '../data/farmers.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(farmers);
});

export default router;
