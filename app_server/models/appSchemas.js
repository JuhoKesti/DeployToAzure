const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({event:String, year:String, team:String});
const mvpSchema = new mongoose.Schema({events:String, year:String, gamer:String});

mongoose.model('events', eventsSchema);
mongoose.model('mvp', mvpSchema);
