import express from 'express';
import http, { METHODS } from 'http';
import { Server } from 'socket.io';
import fs, { write } from 'node:fs'
import { Socket } from 'node:dgram';
import { useState } from 'react';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

const PORT = 5173;
server.listen(PORT, () => {
    console.log(`server running`)
});

// io.on('connection', (socket) => {
//     const [characters, setCharacters] = useState([])
//     socket.on()
// })