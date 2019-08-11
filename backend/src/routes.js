const express = require('express');
const router = express.Router();
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DisLikeController = require('./controllers/DislikeController');


router.get('/devs', DevController.index);
router.post('/devs', DevController.store);


router.post('/devs/:devId/likes', LikeController.store);
router.post('/devs/:devId/dislikes', DisLikeController.store);

module.exports = router;   