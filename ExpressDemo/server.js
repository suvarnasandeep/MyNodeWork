console.log('Hello sandeep');

var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    //res.send('Hello sandeep...!!!');
    console.log('sandeep');
    res.render('sample.html')
 })
/*
app.get('/name', function(req, res){
    res.send('Hello sandeep suvarna!');
})

app.get('/name/:id', function(req, res){
    const id = req.params.id;
    res.send('Hello sandeed suvarna ' + id)
})
*/
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })