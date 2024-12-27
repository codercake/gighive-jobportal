import express from 'express';
import { getProfile, updateProfile } from '../controllers/profile.controller.js';

const router = express.Router();

router.get('/', authenticateJWT, getProfile);
router.put('/', authenticateJWT, updateProfile);

export default router;
