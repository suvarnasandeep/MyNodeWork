console.log('sandeep suvarna')

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {cors : {origin: "*"}});

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    //res.send('Hello sandeep...!!!');
    //console.log('sandeep');
    res.render('sample.html')
 })

 server.listen(3001, () => {
     console.log("Server running at 3001...!!!");
 });


 io.on('connection', (socket) => {
    console.log("Usser connected : " + socket.id);

    socket.on("message", (data) =>{
        //console.log(data);
        socket.broadcast.emit('message',data);
    });



 });