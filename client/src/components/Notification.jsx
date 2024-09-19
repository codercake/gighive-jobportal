import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); 
const Notification = () => {
  useEffect(() => {
    socket.on('notification', (data) => {
      console.log(data);  
    })
    return () => {
      socket.off('notification');
    };
  }, []);

  return <div>Notifications Component</div>;
};

export default Notification;
