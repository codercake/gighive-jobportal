export const validateNotification = (req, res, next) => {
    const { userId, message } = req.body;

    if (!userId || !message) {
        return res.status(400).json({ message: 'User ID and message are required' });
    }
    next();
};
