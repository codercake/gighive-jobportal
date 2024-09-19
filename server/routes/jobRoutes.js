import express from 'express';
import Job from '../model/jobSchema.js';  
const router = express.Router();

//GET all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//GET a single job by ID
router.get('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//POST a new job
router.post('/', async (req, res) => {
    const newJob = new Job(req.body);
    try {
        const savedJob = await newJob.save();
        console.log('New Job Data:', savedJob); 
        res.status(201).json(savedJob);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
