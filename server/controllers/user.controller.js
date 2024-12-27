import User from '../models/userSchema.js';  

export const getUserProfile = async (req, res) => {
    const userId = req.user.id;  

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); 
    } catch (err) {
        console.error('Error fetching user profile:', err);
        res.status(500).json({ message: 'Failed to fetch user profile' });
    }
};
