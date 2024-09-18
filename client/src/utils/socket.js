import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_SOCKET_URL, {
  transports: ['websocket', 'polling'],
});

export default socket;
