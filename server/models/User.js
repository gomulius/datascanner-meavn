const mongoose = require('mongoose');
const bcryptjs = require ('bcryptjs');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    gender: String
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

// Encrypting user password
module.exports.createUser = (newUser, callback) => {
    bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(newUser.password, salt, (error, hash) => {
            // store the hash password
            const newUserResource = newUser;
            newUserResource.password = hash;
            newUserResource.save(callback);
        });
    });
};