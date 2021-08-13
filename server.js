const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 80;

    
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));
require('./Routes/index')(app);
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

