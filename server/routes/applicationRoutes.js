import express from 'express';
import Application from '../model/applicationSchema.js';  
const router = express.Router();

// POST a new job application
router.post('/', async (req, res) => {
    const { jobId, name, email, resume } = req.body;

    const newApplication = new Application({
        jobId,
        name,
        email,
        resume,
    });

    try {
        const savedApplication = await newApplication.save();
        console.log('New Application Data:', savedApplication); 
        res.status(201).json(savedApplication);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET all applications for a specific job
router.get('/job/:jobId', async (req, res) => {
    try {
        const applications = await Application.find({ jobId: req.params.jobId });
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;