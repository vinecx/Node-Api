const { getAll, insertDocument, DeleteAll, DeleteByID, Login } = require("../repository/user/users");
const jwt = require('jsonwebtoken');

exports.post = (req, res, next) => {
    const user = req.body;
    insertDocument(user).then((response) => {
      res.status(200).json(response.insertedId)
    }).catch((error) => {
      res.status(500).json(error.message)
    });
 };
  
 exports.put = (req, res, next) => {
   const user = req.body.user;
   console.log('Adding user:::::', user);
   users.push(user);
   res.json({ok: true});
 };
  
 exports.delete = (req, res, next) => {
    const id = req.params.id;
    DeleteByID(id).then((result) => {
      res.json(result)
    }).catch((error) => {
      res.json(error)
    })
 };

 exports.deleteAll = (req, res, next) => {
    DeleteAll().then((value) => {
      res.json(value);
    }).catch((exception) => {
      res.json(exception)
    })
}; 

 exports.get = (req, res, next) => {
   getAll().then((x) => {
    res.json(x)
   }).catch((reason) => {
     res.json({erro: reason})
     console.log(reason)
   })
   console.log('api/users called!')
 };
  
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
 };

 exports.login = (req, res, next) => {
   let user = req.body.user
   let password = req.body.password

  Login(user, password).then((result) => {
    
    if(result){
      const id = result.id;
      const token = jwt.sign({ id }, process.env.SECRET, {
         expiresIn: 86400 // expires in 25 hours
      });
      return res.status(200).send({ auth: true, token: token });
      }
      
      res.status(500).json({message: 'Credenciais inválidas!'});
  }).catch((error) => {
    res.status(500).send({erro: error.message})
  })

 }
