import User from '../model/userSchema.js';

export const getProfile = async (req, res) => {
    try {
        const userId = req.user.id; 
        const user = await User.findById(userId).select('-password'); //Exclude password from the response
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};
