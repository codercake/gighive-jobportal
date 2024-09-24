import express from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware.js'; 
import User from '../model/userSchema.js'; 

const router = express.Router();

router.get('/profile', authenticateJWT, async (req, res) => {
    try {
        const userId = req.user.id; 
        const user = await User.findById(userId).select('-password'); 
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

export default router; 
