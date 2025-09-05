#TCP_CHAT_APP
A simple real-time chat application built using Node.js, Express, and Socket.IO.
It allows multiple users to connect and exchange messages instantly via WebSockets.

#Features
Real-time communication using WebSockets
Multiple clients can chat simultaneously
Messages broadcast to all connected users
Simple and clean frontend (HTML + Express)

#Tech Stack
Node.js
Express.js
Socket.IO
HTML, CSS, JavaScript (Frontend)

#Working principles
The server listens for new connections (io.on("connection")).
When a user sends a message, the server broadcasts it to all connected clients using io.emit().
The frontend listens for incoming messages and displays them in the chat box.

#License
This project is licensed under the MIT License.
