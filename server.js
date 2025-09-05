//Fetching part
const express=require("express")
const http=require("http")
const {Server}=require("socket.io")

//creating app part
const app=express()
const server=http.createServer(app)
const io=new Server(server)

app.use(express.static("public"));//from this visiting http://localhost:3000/ will automatically give index.html
let cnt = new Set();

io.on("connection",(socket)=>{
     cnt.add(socket.id);
    console.log("user connected",socket.id)
    console.log("Currently open tabs:", cnt.size);
    // Broadcast the number of open tabs to all clients
    io.emit("open tabs", cnt.size);

    socket.on("chat message",(msg)=>{
        console.log(msg)
        io.emit({id: socket.id, msg})//broadcast to all clients
    });
    socket.on("disconnected",()=>{
        cnt.delete(socket.id)

        console.log("user disconnected",socket.id)
        io.emit("open tabs", cnt.size);
    });
});

server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
})
