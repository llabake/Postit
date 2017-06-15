const groupController = require('../controllers').Group;

module.exports = (app) => {
  app.get('/api/group', (req, res) => res.status(200).send({
    message: 'Welcome to the group',
  }));

  app.post('/api/group', groupController.create); 
}







