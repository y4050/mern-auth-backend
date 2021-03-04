require('dotenv').config();
// A passport strategy for authenticating with a JSON Web Token
// This allows to authenticate endpoints using a token

// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// destructuring of the imports
const { Strategy, ExtractJwt} = require('passport-jwt');
const mongoose = require('mongoose');

// Import User Model
const { User } = require('../models/user');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();  // adding key and value into the options object
options.secretOrKey = process.env.JWT_SECRET;


// exporting but just with a more hidden way
module.exports = (passport) => {
    // Add code here
    // jwt_payload will be an object, that has id key-value in it, done is a call back that will be use to return use or false
    passport.use(new Strategy(options, (jwt_payload, done) => {
        // Have a user that were find by the id inside of the payload
        // when we get the user back, we'll chekc to see if use in DB
        User.findById(jwt_payload.id)
        .then(user => {
            // jwt-payload is an object {} that contains JWT info
            if (user) {
                // if a user is found, return done with null (for error) and user
                return done(null, user); // null for error
            } else {
                return done(null, false)
            }
        })
        .catch(error => {
            console.log('========> ERROR below (passport.js)');
            console.log(error);
        })
    }))
}