const mongoose = require('mongoose');

const eventsModel = mongoose.model('events');

const eventList = function (req, res) {
  eventsModel.find({}, function(err, events){
    if(err){
      res.status(404).json(err);
    }
    else{
      res.status(200).json(events);
    }
  });
};

const addEvent = function (req, res) {
  eventsModel.create(req.body, function(err, newEvent){
    if(err){
      res.status(400).json(err);
    }
    else{
      res.status(201).json(newEvent);
    }
  });
};


module.exports = {
  eventList,
  addEvent
};
