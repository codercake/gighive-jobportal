import { Server } from 'socket.io';
import { registerUserForNotifications } from '../controllers/notification.controller.js';

const setupSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:3000',
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
