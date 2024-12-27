import Application from '../model/applicationSchema.js';

export default class ApplicationsController {
    static async apiCreateApplication(req, res) {
        try {
            const { jobId, name, email, resume } = req.body;
            const newApplication = new Application({ jobId, name, email, resume });

            const savedApplication = await newApplication.save();
            res.status(201).json(savedApplication);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async apiGetApplicationsByJob(req, res) {
        try {
            const applications = await Application.find({ jobId: req.params.jobId });
            res.json(applications);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
