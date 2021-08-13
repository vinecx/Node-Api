



var users = [
   {
     firstName: "first1",
     lastName: "last1",
     email: "abc@gmail.com"
   },
   {
     firstName: "first2",
     lastName: "last2",
     email: "abc@gmail.com"
   },
   {
     firstName: "first3",
     lastName: "last3",
     email: "abc@gmail.com"
   }
 ];


exports.post = (req, res, next) => {
   const user = req.body.user;
   console.log('Adding user:::::', user);
   users.push(user);
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
   console.log('api/delete ALL User called!')
   users = []
   res.json({ok: true});
}; 

 exports.get = (req, res, next) => {
   console.log('api/users called!')
   res.json(users);
 };
  
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
 };