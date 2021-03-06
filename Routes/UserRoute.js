const UsuarioController = require('../Controllers/UserController');
const jwt = require('jsonwebtoken');
const fs = require('fs')

// TOKEN
function verifyJWT(req, res, next){
   const token = req.headers['x-access-token'];
   if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
   
   var publicKey  = fs.readFileSync('./public.key', 'utf8');
   jwt.verify(token, publicKey, {algorithm: ["RS256"]}, function(err, decoded) {
     if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
     
     // se tudo estiver ok, salva no request para uso posterior
     req.userId = decoded.id;
     next();
   });
}

module.exports = (app) => {
   app.post('/api/user', verifyJWT , UsuarioController.post);
   app.put('/api/user', verifyJWT ,UsuarioController.put);
   app.delete('/api/user/:id', verifyJWT, UsuarioController.delete);
   app.delete('/api/users', verifyJWT ,UsuarioController.deleteAll);
   app.get('/api/users', verifyJWT ,UsuarioController.get);
   app.get('/api/user/:id', verifyJWT, UsuarioController.getById);
   app.post('/authentication', UsuarioController.login);
}