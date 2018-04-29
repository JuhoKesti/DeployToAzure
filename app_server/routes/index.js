const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlEvents = require('../controllers/ctrlEvents');
const ctrlMvp = require('../controllers/ctrlMvp');


router.get('/', ctrlMain.index); //Home page
router.get('/events', ctrlEvents.eventlist); //List of Major events and winning teams
router.get('/mvp', ctrlMvp.playerlist);


router
    .route('/events/add')
    .get(ctrlEvents.showForm)
    .post(ctrlEvents.addData);

router
    .route('/mvp/add')
    .get(ctrlMvp.showForm)
    .post(ctrlMvp.addData);

module.exports = router;
