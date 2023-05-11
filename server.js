const express=require('express');
const bodyParser=require('body-parser')
const routerVaccine=require('./router/vaccine');
const routerPatient=require('./router/patient');
const routerSick=require('./router/covid19');
const mongoose=require('mongoose');
const dotenv = require('dotenv');
const app=express();

dotenv.config();
console.log(process.env.URL)

 
const db=require('./model');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

db.mongoose.connect(process.env.URL,options)
.then(() => {
    console.log("Connected to the database!");
})
.catch(err => {
    console.log("Cannot connect to the database!", err);
    ///
    process.exit();
});

app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT ,()=>console.log("server is up"+process.env.PORT ));

app.get("/",(req,res)=>{res.send("hello server")});
app.use("/api/patient",routerPatient);
app.use("/api/vaccine",routerVaccine);
app.use("/api/covid19",routerSick);