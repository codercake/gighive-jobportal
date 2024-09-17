import express from "express";
import { registerUser, loginUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Server!');
});

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
