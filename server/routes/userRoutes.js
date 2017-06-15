const userController = require('../controllers').user;

module.exports = (app) => {
  app.get('/api/user', (req, res) => res.status(200).send({
    message: 'Welcome to the user controller! You have to sign up',
  }));

  app.post('/api/user/signup', userController.create);
  app.get('/api/user/signin', userController.findOne);
  
}


    userRouter.route('/user/signup')
        .post(function (req, res){
            

    userRouter.route('/user/signin')

        .get(function (req,res){


}

