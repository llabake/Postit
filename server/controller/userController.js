const express = require('express');

// const routes = function () {
// //   const userRouter = express.Router();
const User = require('../models/user').User;




  module.exports ={
    create(req, res) {
      if(!req.body.username ){
        res.json({message:"username is required"})
      }
      else if (!req.body.firstName ){
        res.json({message:"First name is required"})
      }
      else if (!req.body.lastname ){
        res.json({message:"Last name is required"})
      }
      else if (!req.body.email ){
        res.json({message:"Email is required"})
      }
      else if (!req.body.password ){
        res.json({message:"Password is required"})
      }
      else if (req.body.password != req.body.confirmpassword){
        res.json({message:"Please ensure the Password match"})
      }
      else
      {
        User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })
        res.status(201).send("Your account has been created")
      }
    },
  findUser  ( req, res) {
    user.findOne({
      username: req.body.username,
      password: req.body.password, function (err,user){
        if(err)
        {
          res.status(500).send(err)
        }
        else
        {
          req.user.username = req.body.username;
          req.user.password = req.body.password;
          user.save();
        }
      }
    })
    .then(user => res.status(201).json(user))
    return User;
  }
}
  
 