const request = require('request');
const apiURL = require('./apiURLS');

const showForm = function(req, res){
  res.render('mvp_add');
};

const addData = function(req, res){
  const path = '/api/mvp';

  const postdata = {
    event: req.body.event,
    year: req.body.year,
    gamer: req.body.gamer
  };

  const requestOptions = {
    url : apiURL.server + path,
    method : 'POST',
    json : postdata
  };

  request(
    requestOptions,
    function (err, response){
      if(response.statusCode === 201) {
        res.redirect('/mvp');
      }else{
        res.render('error', {message: 'Error adding data: ' +
        response.statusMessage+
        ' ('+ response.statusCode +')'});
      }
    }
  );
};
const playerlist = function(req, res){
  const path = '/api/mvp';
  const requestOptions = {
    url : apiURL.server + path,
    method : 'GET',
    json : {},
    qs : {}
  };
  request(
    requestOptions,
    function(err, response, body){
      if(err){
        res.render('error', {message: err.message});
      } else if (response.statusCode !== 200){
        res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " (" + response.statusCode + ")"});
      } else if (!(body instanceof Array)){
        res.render('error', {message: 'Unexpected response data'});
      } else if (!body.length){
        res.render('error', {message: 'No documents in collection'});
      } else {
        res.render('mvp', {players: body});
      }
    }
  );
};
module.exports = {
  playerlist,
  showForm,
  addData
};
