import JobsDAO from "../dao/jobsDAO.js";

export default class JobsController {
    static async apiGetJobs(req, res, next) {
        const jobsPerPage = req.query.jobsPerPage ? parseInt(req.query.jobsPerPage, 10) : 20;
        const page = req.query.page ? parseInt(req.query.page, 10) : 0;

        let filters = {};
        if (req.query.type) filters.type = req.query.type;
        if (req.query.hybrid) filters.onsite = req.query.onsite;
        if (req.query.name) filters.name = req.query.name;

        try {
            const { jobsList, totalNumJobs } = await JobsDAO.getJobs({ filters, page, jobsPerPage });
            res.json({ jobs: jobsList, page, filters, entries_per_page: jobsPerPage, total_results: totalNumJobs });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiGetJobById(req, res, next) {
        try {
            const id = req.params.id || {};
            const job = await JobsDAO.getJobByID(id);
            if (!job) {
                res.status(404).json({ error: "Not found" });
                return;
            }
            res.json(job);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiGetJobType(req, res, next) {
        try {
            const type = await JobsDAO.getRemote();
            res.json(type);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
