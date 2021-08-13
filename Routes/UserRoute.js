const UsuarioController = require('../Controllers/UserController');
module.exports = (app) => {
   app.post('/api/user', UsuarioController.post);
   app.put('/api/user', UsuarioController.put);
   app.delete('/api/user/:id', UsuarioController.delete);
   app.delete('/api/users', UsuarioController.deleteAll);
   app.get('/api/users', UsuarioController.get);
   app.get('/api/user/:id', UsuarioController.getById);
}