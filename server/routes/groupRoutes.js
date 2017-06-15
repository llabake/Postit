// const groupController = require('../controller/groupController');

module.exports = (app) => {
  app.get('/api/group', (req, res) => res.status(200).send({
    message: 'Welcome to the group',
  }));

  // app.post('/api/group', groupController.create); 
}







