const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const JwtOptions = {};
JwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme('jwt');
JwtOptions.secretOrKey = 'datascannerapplicationsecretkey';

const app = express();
const router = express.Router();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

const DBurl = "mongodb://localhost:27017";

// connect to mongoDB and raf-test cluster
mongoose.connect(DBurl + "/raf-test", function(){
    console.log('Connection to the DB has been made');
}) 
.catch(err => {
    console.error('App starting error', err.stack);
    process.exit;
})

// Include controllers
fs.readdirSync("controllers").forEach(function (file){
    if(file.substr(-3) == ".js") {
        const route = require("./controllers/" + file);
        route.controller(app);
    }
});

router.get('/', function(req, res) {
    res.json({ message: 'API initialized!' });
});

const port = process.env.API_PORT || 8081;

app.use('/', router);
app.listen(port, function() {
    console.log(`appi running on port ${port}`);
});