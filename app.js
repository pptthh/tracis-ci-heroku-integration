const express = require('express');
//const router = express.Router();
const app = express();
module.exports = app;

//  socket io
const http = require('http').Server(app);
const io = require('socket.io')(http);

const log = console.log;
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{res.send('Hello Word!');log('app.get')});

app.post('/author', (req,res) => {res.send({name:'Péter'});log('app.post')});

app.listen(port, () =>{log(`Server started listening on port: ${port}`);});

app.get('/chat', (req, res)=>{res.sendFile(__dirname + '/index.html')});

io.on('connection', (socket)=>{log('a user connected',socket);});
