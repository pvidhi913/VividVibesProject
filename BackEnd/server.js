var express= require("express");
var http = require("http");
var mongoose=require("mongoose");
const cors = require('cors');
const env =require('dotenv').config();


var app=express();
var bodyParser = require('body-parser');
var Users = require('./model/users.model');
var admins = require('./model/admins.model');

app.use(express.json());
app.use(bodyParser.json());
//import routes
const usersRoute = require('./routers/router.js'); 
app.use('/',usersRoute);
app.use(cors());
 

var server=http.createServer(app);
mongoose.connect("mongodb://localhost:27017/VividVibesDB")
mongoose.connection.on('connected',()=>{
    console.log("connected to Mongoose");
});
mongoose.connection.on('error',()=>{
    console.log("error in connecting to Mongoose");
});

//accept node express
app.get('/', (req,res) =>{
    res.send('hello from Homepage');

});



server.listen(process.env.PORT || 5000, ()=>{
    console.log("hello server init");
});

