const eventlist = function(req, res){
  res.render('events',{
    champions:[
        {event:'ELEAGUE Major: Boston', year:'2018', team:'Cloud9'},
        {event:'PGL Major Kraków', year:'2017', team:'Gambit'},
        {event:'ELEAGUE Major: Atlanta', year:'2017', team:'Astralis'},
        {event:'ESL One: Cologne', year:'2016', team:'SK Gaming'},
        {event:'MLG Major Championship: Columbus', year:'2016', team:'Luminosity Gaming'},
        {event:'DreamHack Open Cluj-Napoca', year:'2015', team:'Team EnVyUs'},
        {event:'ESL One: Cologne', year:'2015', team:'Fnatic'},
        {event:'ESL One: Katowice', year:'2015', team:'Fnatic'},
        {event:'DreamHack Winter', year:'2014', team:'Team LDLC'},
        {event:'ESL One: Cologne', year:'2014', team:'Ninjas in Pyjamas'},
        {event:'ESL Major Series One: Katowice', year:'2014', team:'Virtus Pro'},
        {event:'DreamHack Winter', year:'2013', team:'Fnatic'}
    ]});
};
module.exports = {
  eventlist
};
