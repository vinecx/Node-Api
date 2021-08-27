require("dotenv").config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());


//  AUTHENTICATION
app.post('/login', (req, res, next) => {
    if(req.body.user === 'luiz' && req.body.password === '123'){
      //auth ok
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 100 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    
    res.status(500).json({message: 'Login inválido!'});
})

app.use(express.static(path.join(__dirname, '../my-app/build')));

require('./Routes/index')(app);



app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

