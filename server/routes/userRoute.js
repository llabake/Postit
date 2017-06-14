const userController = require('../controllers').User;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the user controller!',
  }));

  app.post('/api/user', userController.create);
};