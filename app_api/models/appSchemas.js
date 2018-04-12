const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({event:String, year:String, team:String});
const mvpSchema = new mongoose.Schema({event:String, year:String, gamer:String});

mongoose.model('events', eventsSchema, "events");
mongoose.model('mvp', mvpSchema, "mvp");
