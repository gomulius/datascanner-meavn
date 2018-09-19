const User = require('../models/User.js');

const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');

const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'thisissecretkay';

module.exports.controller = (app) => {
    // register new user
    app.post('/users/register', (req, res) => {
        console.info("body: ", req.body);
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const gender = req.body.gender;

        const newUser = new User({
            name,
            email,
            password,
            gender
        });

        User.createUser(newUser, (error, user) => {
            if (error) { 
                res.status(422).json({
                    message: 'Something went wrong. Please try again later!'
                })
             }
            res.send({ user });
        });
    });

    // login a user
    app.post('/users/login', (req, res) => {
        if(req.body.email && req.body.password) {
            const email = req.body.email;
            const password = req.body.password;
            User.getUserByEmail(email, (err, user) => {
                if (!user) {
                    res.status(404).json({ message: 'The user does not exist!' });
                } else{
                    User.comparePassword(password, user.password, (error, isMatch) => {
                        if(error) throw error;
                        if(isMatch) {
                            const payload = { id: user.id };
                            const token = jwt.sign(payload, jwtOptions.secretOrKey);
                            res.status(200).json({message: 'ok', token });
                        } else{
                            res.status(401).json({ message: 'The password is incorrect!' })
                        }
                    })
                }
            })
        }
    })
};