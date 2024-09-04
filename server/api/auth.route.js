import express from "express";
import { registerUser, loginUser } from "./auth.controller";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Server!');
});

router.post('/register', registerUser);
router.post('/login', loginUser);

// User Registration
router.post('/register', (req, res) => {
    console.log('User Registration Data:', req.body);
    res.json({ message: 'User registered', data: req.body });
});

// User Login
router.post('/login', (req, res) => {
    console.log('User Login Data:', req.body);
    res.json({ message: 'User logged in', data: req.body });
});

export default router;
