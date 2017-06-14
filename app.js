const express = require('express'),
    sequelize = require('sequelize'),
    bodyParse =require ('body-parser');

const User = require('./models/user.js') 
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.Json());

userRouter = require('./Routes/userRoutes')();

app.use('/api/User/signup',userRouter); 
app.use('/api/User/signin',userRouter);


app.use('/api/Group',groupRouter);
app.use('/api/Group/groupid/user',groupRouter);
app.use('/api/Group//groupid/user',groupRouter);
app.use('/api/Group//groupid/message',groupRouter);

app.get('/', function(req, res){
    res.send('Welcome to Postit');
});

app.listen(port,function(){
    console.log(`Server running on port ${port}`)
});
