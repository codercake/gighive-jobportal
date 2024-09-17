import { Server } from 'socket.io';
import { registerUserForNotifications } from '../controllers/notificationController.js';

const setupSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log('New client connected');
        registerUserForNotifications(socket);

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });

    return io;
};

export default setupSocket;
