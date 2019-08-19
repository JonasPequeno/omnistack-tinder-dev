const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

mongoose.connect(
    'mongodb://admin:jonas123@ds261567.mlab.com:61567/tinder-dev',
    { useNewUrlParser: true }
);
//bodyParser.urlencoded({ extended: false });
//server.use(bodyParser.urlencoded({ extended: false }))
//server.use(bodyParser.json())

//permitir o acesso do react
server.use(cors());
server.use(express.json());

server.use(routes); 

server.listen(3000, () => {
    console.log(`Servidor rodando`);
});

///mongodb://<dbuser>:<dbpassword>@ds261567.mlab.com:61567/tinder-dev