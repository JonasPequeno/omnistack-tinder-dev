const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.status(200).json(`${req.query.name}`);
    res.status(200).json(`{msg :Olá ${req.query.name}}`);
});

router.post('/devs', (req, res) => {
    return json(req.bod);
});

module.exports = router;