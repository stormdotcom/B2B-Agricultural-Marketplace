import express from 'express';
import { addRequirement, getRequirements } from '../controllers/requirementController.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = express.Router();

router.post("/", asyncHandler(addRequirement));
router.get("/", asyncHandler(getRequirements));

export default router;
