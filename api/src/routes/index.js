import express from 'express';
import requirementRoute from "./requirementRoutes.js";
const router = express.Router();

router.use('/requirements', requirementRoute);

export default router;
