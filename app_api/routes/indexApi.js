const express = require('express');
const router = express.Router();

const ctrlApiEvents = require('../controllers/ctrlApiEvents');
const ctrlApiMvp = require('../controllers/ctrlApiMvp');

router
    .route('/events')
    .get(ctrlApiEvents.eventList)
    .post(ctrlApiEvents.addEvent);

router
    .route('/mvp')
    .get(ctrlApiMvp.playerlist)
    .post(ctrlApiMvp.addWinner);

module.exports = router;
