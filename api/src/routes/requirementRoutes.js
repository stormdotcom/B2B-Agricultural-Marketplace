import express from 'express';
import { addRequirement } from '../controllers/requirementController.js';

const router = express.Router();

router.post('/', addRequirement);

export default router;
