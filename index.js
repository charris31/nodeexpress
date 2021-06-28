const express = require('express');

const app = express();

const port = 3000;

app.get('/', function(req,res){
    res.send("Hello There!")
})
app.get('/home', function(req,res){
    console.log(__dirname);
    console.log(__dirname + '/pages/index home.html')
    res.send(__dirname + '/pages/index home.html')
})
app.post('/home', function(req,res){
    res.send("post() success!");
})
app.get('/about', function(req,res){
    console.log(__dirname);
    console.log(__dirname + '/pages/index about.html')
    res.sendFile(__dirname + '/pages/index about.html')
})
app.post('/about', function(req,res){
    res.send("post() success!");
})
app.get('/contact', function(req,res){
    console.log(__dirname);
    console.log(__dirname + '/pages/index contact.html')
    res.sendFile(__dirname + '/pages/index contact.html')
})
app.post('/contact', function(req,res){
    res.send("post() success!");
})
app.listen(port,function(){
    console.log('Listening at port: ' + port)
})