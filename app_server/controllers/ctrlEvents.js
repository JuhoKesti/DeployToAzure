const request = require('request');
const apiURL = require('./apiURLS');

const showForm = function(req, res){
    res.render('events_add');
};

const addData = function(req, res){
  const path = '/api/events';

  const postdata = {
    event: req.body.event,
    year: req.body.year,
    team: req.body.team
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
        res.redirect('/events');
      }else{
        res.render('error', {message: 'Error adding data: ' +
        response.statusMessage+
        ' ('+ response.statusCode + ')'});
      }
    }
  );
};

const eventlist = function(req, res){
  const path = '/api/events';
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
        res.render('events', {champions: body});
      }
    }
  );
};
module.exports = {
  eventlist,
  showForm,
  addData
};
