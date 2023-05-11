const mongoose = require("mongoose");
mongoose.Promise = global.Promise;



const db = {};
db.name="HMO";
db.mongoose = mongoose;
db.url = process.env.URL;

db.Sick=require("./covid19.model");
db.vaccine=require("./vaccine.model");
db.patient = require("./patient.model");
module.exports = db;
