import express from 'express';
import farmerRoute from './farmerRoutes.js';
import requirementRoute from "./requirementRoutes.js";
const router = express.Router();

router.use('/requirements', requirementRoute);
router.use('/farmers', farmerRoute);

export default router;
