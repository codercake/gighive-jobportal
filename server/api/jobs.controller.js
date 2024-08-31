import JobsDAO from "../dao/jobsDAO.js";

export default class JobsController {
  static async apiGetJobs(req, res, next) {
    const jobsPerPage = req.query.jobsPerPage ? parseInt(req.query.jobsPerPage, 10) : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.type) {
      filters.type = req.query.type;
    } else if (req.query.hybrid) {
      filters.onsite = req.query.onsite;
    } else if (req.query.name) {
      filters.name = req.query.name;
    }

    const { jobsList, totalNumJobs } = await JobsDAO.getJobs({
      filters,
      page,
      jobsPerPage,
    });

    let response = {
      jobs: jobsList,
      page: page,
      filters: filters,
      entries_per_page: jobsPerPage,
      total_results: totalNumJobs,
    };
    res.json(response);
  }

  static async apiGetJobById(req, res, next) {
    try {
      let id = req.params.id || {};
      let job = await JobsDAO.getJobByID(id);
      if (!job) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(job); 
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }

  static async apiGetJobType(req, res, next) {
    try {
      let type = await JobsDAO.getType(); 
      res.json(type);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }
}
