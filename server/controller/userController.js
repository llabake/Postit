
const express = require('express');
const routes = function () {
const userRouter = express.Router();
userRouter.route('/')
  .post(function (req, res) {
    const user = new User(req.body);
    book.save();
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
userRouter.use('/:userid',function(res,req,next){
  if(err){
    res.status(500).send(err);
  }
  else if (user){
    req.user = user;
    next();
  }
    else
  {
    res.status(404).send('not found')
  }
})
userRouter.route('/:userid')
  .get(function (req, res) {
    res.json(req.user);

//            User.findById(req.param.userid, function (err, user) {
//                if (err)
//                {res.status(500).send(err);}
//                else
//                    res.json(user)
//            });

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