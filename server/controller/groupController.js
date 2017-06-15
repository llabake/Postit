const express = require('express');
const routes = function () {
const groupRoute = express.Router();
const Group = require('../models/group').Group;
// create the group, use midlleware for the :groupid then do methods  find one for the differnt verbs check for error or return the verb action  in the api route


module.exports = {
    create(req, res) {
        if(!req.body.groupname ){
         res.json({message:"groupname is required"})
        }
        else
        {
            group.create({
            groupname: req.body.groupname,
        })
        .then(user => res.status(201).json(user))
        .catch(error => res.status(400).send(error));
    }
  groupRouter.use('/:groupid',function(res,req,next){  //midlleware
  if(err){
    res.status(500).send(err);
  }
  else if (group){
    req.group = group;
    next();
  }
    else
  {
    res.status(404).send('not found')
  }

  },
  .put(function(req,res){
    User.findById(req.param.userid, function (err, user) {
      if (err)
      {
        res.status(500).send(err);
      }
      else{
        req.user.username = req.body.username;
        user.save();
        res.json(user)
      }
    });
  })



userRouter.route('/')
  .post(function (req, res) {
    const user = new User(req.body);
    user.save();
    res.status(201).send(user);
  })
  .get(function (req, res) {
    const query = req.query;
    User.find(query, function (err, users) {
      if (err){
        res.status(500).send(err);
      }
      else
      {res.json(users)
         }    
        });
  });
  //middleware
groupRouter.use('/:groupid',function(res,req,next){
  if(err){
    res.status(500).send(err);
  }
  else if (group){
    req.group = group;
    next();
  }
    else
  {
    res.status(404).send('not found')
  }
})
groupRouter.route('/:groupid')
  .get(function (req, res) {
    res.json(req.group);

  });
  .put(function(req,res){
    User.findById(req.param.userid, function (err, user) {
      if (err)
      {
        res.status(500).send(err);
      }
      else{
        req.user.username = req.body.username;
        user.save();
        res.json(user)
      }
    });
  })
  return userRouter;
};