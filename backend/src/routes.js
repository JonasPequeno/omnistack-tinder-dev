const express = require('express');
const router = express.Router();
const DevController = require('./controllers/DevController');

router.get('/', (req, res) => {
    //res.status(200).json(`${req.query.name}`);
    res.status(200).json(`{msg :Olá ${req.query.name}}`);
});

router.post('/devs', DevController.store);

module.exports = router;   