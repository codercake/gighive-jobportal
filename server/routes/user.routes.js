import express from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware.js'; 
import { getProfile } from '../controllers/user.controller.js'; 
import User from '../model/userSchema.js'; 
const router = express.Router();

router.get('/profile', authenticateJWT, getProfile);

router.get('/applications', authenticateJWT, async (req, res) => {
    try {
        const userId = req.user.id; 
        const user = await User.findById(userId).populate('applications'); //Populate 'applications' field

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user.applications); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

export default router;
