require('dotenv').config();
const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {

};

io.on('connection', socket => {
    const { user } = socket.handshake.query;
    console.log(user,socket.id);
    connectedUsers[user] = socket.id;
});

let db_user = String(process.env.DB_STR);
//console.log(db_user);

mongoose.connect(db_user,{
    useNewUrlParser: true,
});

app.use( (req,res,next) => {

    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();

});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3333);
console.log('Listening on 3333');
 