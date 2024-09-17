const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.emit('notification', 'Welcome to GigHive!');
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
