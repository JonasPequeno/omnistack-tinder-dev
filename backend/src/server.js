const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb://admin:jonas123@ds261567.mlab.com:61567/tinder-dev');
mongoose.

server.use(routes);
bodyParser.urlencoded({ extended: false }); 



server.listen(3000, () => {
    console.log(`Servidor rodando`);
});   

///mongodb://<dbuser>:<dbpassword>@ds261567.mlab.com:61567/tinder-dev