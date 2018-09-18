const User = require('../models/User.js');

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
};