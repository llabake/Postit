const messageController = require('../controllers').Message;

module.exports = (app) => {
  app.get('/api/', (req, res) => res.status(200).send({
    message: 'Welcome to the group',
  }));

  app.post('/api/group', groupController.create); 
}