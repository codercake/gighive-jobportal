import express from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware.js';
import ApplicationsController from '../controllers/application.controller.js';

const router = express.Router();

// Route for submitting a job application
// This will handle application submissions
// Expected to handle form submission with file upload (Resume) and other data
router.post('/', authenticateJWT, ApplicationsController.apiCreateApplication);

// Route for getting applications for a specific job
// Returns a list of applications filtered by a job ID
router.get('/job/:jobId', ApplicationsController.apiGetApplicationsByJob);

// Route for getting applications related to the currently authenticated user
// This uses the JWT token to determine the user and their application records
router.get('/', authenticateJWT, ApplicationsController.apiGetUserApplications);

export default router;
