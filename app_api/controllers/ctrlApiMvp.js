const mongoose = require('mongoose');

const mvpModel = mongoose.model('mvp');

const playerlist = function (req, res) {
  mvpModel.find({}, function(err, mvps){
    if(err){
      res.status(404).json(err);
    }
    else{
      res.status(200).json(mvps);
    }
  });
};

const addWinner = function (req, res) {
  mvpModel.create(req.body, function(err, newWinner){
    if(err){
      res.status(400).json(err);
    }
    else{
      res.status(201).json(newWinner);
    }
  });
};


module.exports = {
  playerlist,
  addWinner
};
