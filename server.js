const express = require('express');
const socketio = require('socket.io');
const http  = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app); 
const io = socketio(server);
const formatMessage = require('./utils/messages');
const {userJoin,getCurrentUser,userLeave,getRoomUsers} = require('./utils/users');

//Set static folder use by express to serve static files

app.use(express.static(path.join(__dirname,'public')));

const botname = 'ChatCord Bot';
//run when client connects 
io.on('connection',socket=>{

    socket.on('joinRoom',({username,room})=>{
        const user = userJoin(socket.id,username,room);
        socket.join(user.room);
   
        //welcome current user
    socket.emit('message',formatMessage(botname,'Welcome to ChatCord'));

    //broadcast when a user connects
    socket.broadcast.to(user.room).emit('message',formatMessage(botname,`${user.username} has joined the chat`));


    //send users and room info
    io.to(user.room).emit('roomUsers',{
        room:user.room,
        users:getRoomUsers(user.room)
    })
    //console.log("new Ws Connection");
    
    
    //listen for chat messgae
    socket.on('chatMessage',(msg)=>{
        const user = getCurrentUser(socket.id);
        //console.log(msg)
        io.to(user.room).emit('message',formatMessage(user.username,msg))
    })
    //runs when client disconnects
    socket.on('disconnect',()=>{
        const user = userLeave(socket.id);
        if(user){
            io.to(user.room).emit('message',formatMessage(botname,`${user.username} has left the chat`));
        }
        

        //send users and room info
        io.to(user.room).emit('roomUsers',{
            room:user.room,
            users:getRoomUsers(user.room)
        })
    });
})
})

const PORT = 3000 || process.env.PORT;

server.listen(PORT ,()=>{console.log(`Server is running on port ${PORT}`)});