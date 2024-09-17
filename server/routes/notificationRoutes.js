import express from 'express';
import { addNotification } from '../controllers/notificationController.js';

const router = express.Router();
router.post('/send', addNotification);

export default router;
