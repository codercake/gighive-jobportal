import express from 'express';
import { addNotification } from '../controllers/notification.controller.js';

const router = express.Router();
router.post('/send', addNotification);

export default router;
