import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);

const io = new Server(server);

io.on('connection', (socket) =>{
    console.log('New client connected');

    socket.on ('chat message', (msg)=>
    {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen (3000, () => {
    console.log('Server is running on port 3000');
})