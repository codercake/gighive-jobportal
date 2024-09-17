import ResumeDAO from "../dao/resumeDAO.js";

export default class ResumeController {
  static async apiPostResume(req, res, next) {
    try {
      const jobId = req.body.job_id;
      const resume = req.body.text;
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id,
      };
      const date = new Date();

      const resumeResponse = await ResumeDAO.addResume(
        jobId,
        userInfo,
        resume,
        date,
      );
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateResume(req, res, next) {
    try {
      const resumeId = req.body.review_id;
      const text = req.body.text;
      const date = new Date();

      const resumeResponse = await ResumeDAO.updateResume(
        resumeId,
        req.body.user_id,
        text,
        date,
      );

      const { error } = resumeResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (resumeResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update resume - user may not be original poster",
        );
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeleteResume(req, res, next) {
    try {
      const resumeId = req.query.id;
      const userId = req.body.user_id;
      console.log(resumeId); 
      const resumeResponse = await ResumeDAO.deleteResume(
        resumeId,
        userId,
      );
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
