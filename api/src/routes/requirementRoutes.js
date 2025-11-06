import express from 'express';
import { addRequirement, getRequirements } from '../controllers/requirementController.js';

const router = express.Router();

router.post('/', addRequirement);
router.get('/', getRequirements); // TODO

export default router;
