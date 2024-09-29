import Application from '../model/applicationSchema.js';

export const getUserApplications = async (req, res) => {
    try {
        const userId = req.user.id; 
        const applications = await Application.find({ user: userId }).populate('job');
        
        if (!applications) {
            return res.status(404).json({ message: 'No applications found' });
        }
        res.json(applications);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};
