import express from "express";
import JobsCtrl from "../api/jobs.controller.js"; // Correct path to the Jobs controller
import ResumeCtrl from "../api/resume.controller.js"; // Correct path to the Resume controller

const router = express.Router();

router.route("/").get(JobsCtrl.apiGetJobs);
router.route("/id/:id").post(JobsCtrl.apiGetJobById);
router.route("/remote").get(JobsCtrl.apiGetJobType);

router
   .route("/resume")
   .post(ResumeCtrl.apiPostResume)
   .put(ResumeCtrl.apiUpdateResume)
   .delete(ResumeCtrl.apiDeleteResume);

export default router;
