const userController = require('../controller/userController');

module.exports = (app) => {
  app.get('/api/user', (req, res) => res.status(200).send({
    message: 'Welcome to the user controller! You have to sign up',
  }));

  app.post('/api/user/signup', userController.create);
  app.get('/api/user/signin', userController.findUser);
  
}

