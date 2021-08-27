const { getAll, insertDocument, DeleteAll } = require("../repository/user/users");

exports.post = (req, res, next) => {
   const user = req.body;
   insertDocument(user);
   res.json({ok: true});
 };
  
 exports.put = (req, res, next) => {
   const user = req.body.user;
   console.log('Adding user:::::', user);
   users.push(user);
   res.json({ok: true});
 };
  
 exports.delete = (req, res, next) => {
    const id = req.params.id;
    console.log('api/delete User BY ID called!')
    users.splice(id, 1)
    res.json({ok: true});
 };

 exports.deleteAll = (req, res, next) => {
    DeleteAll().then((value) => {
      res.json(value);
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
