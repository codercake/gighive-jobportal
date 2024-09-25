import express from 'express';
import Application from '../model/applicationSchema.js';
import { authenticateJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/my-applications', authenticateJWT, async (req, res) => {
  try {
    const userId = req.user.id;
    const applications = await Application.find({ user: userId }).populate('job');
    
    if (!applications) {
      return res.status(404).json({ message: 'No applications found' });
    }

    res.json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
