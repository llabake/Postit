const express = require('express');
const app = express();
const nodemon = require('nodemon')
const port = process.env.PORT || 3000; //use set PORT else use 3000.


app.get('/', function(req,res){
    res.send("Welcome to my messaging app")
});
app.get('/user', function(req,res){
    res.send("you got to the user")
})
app.get('/group', function(req,res){
    res.send("you got to the group")
})

app.get('/messages', function(req,res){
    res.send("you got to the your messages")
})

app.get('/user/:user_id', function(req, res) {
    let id= req.params.id
  res.send('user ' + req.params.id);
});
app.listen(3000, function(err){
    console.log(`Server running on port ${port}`);
})