let onlineUsers = {};

export const addNotification = (req, res) => {
    const { userId, message } = req.body;

    if (!userId || !message) {
        return res.status(400).json({ message: 'User ID and message are required' });
    }

    if (onlineUsers[userId]) {
        onlineUsers[userId].emit('notification', { message });
        return res.status(200).json({ message: 'Notification sent' });
    } else {
        return res.status(400).json({ message: 'User is not online' });
    }
};

export const registerUserForNotifications = (socket) => {
    socket.on('register', (userId) => {
        onlineUsers[userId] = socket;
        console.log(`User ${userId} connected for notifications`);

        socket.on('disconnect', () => {
            delete onlineUsers[userId];
            console.log(`User ${userId} disconnected`);
        });
    });
};
