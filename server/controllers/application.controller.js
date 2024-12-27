import Application from '../model/applicationSchema.js'; 

export const apiCreateApplication = async (req, res) => {
  const { jobId, qualification, resume } = req.body;  
  const userId = req.user.id;  

  // Validate input
  if (!jobId || !qualification || !resume) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Create new application record in database
    const newApplication = new Application({
      userId,
      jobId,
      qualification,
      resume,
      status: 'Pending',
    });

    // Save the application to the database
    await newApplication.save();

    return res.status(201).json({ message: 'Application submitted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit application. Please try again.' });
  }
};

export const apiGetApplicationsByJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const applications = await Application.find({ jobId }).populate('userId');
    return res.json(applications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get applications for this job.' });
  }
};

export const apiGetUserApplications = async (req, res) => {
  try {
    const userId = req.user.id; 
    const applications = await Application.find({ userId }).populate('jobId');
    return res.json(applications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get your applications.' });
  }
};
