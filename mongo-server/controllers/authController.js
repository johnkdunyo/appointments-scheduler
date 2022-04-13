const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// get user model
const User = require("../models/User");


exports.userSignUp = async(req, res, next) => {

    console.log(req)

    try {
        
    } catch (error) {
        next(error)
    }
};


exports.userSignIn = async (req, res, next) => {

    try {
        
    } catch (error) {
        next(error);
    }
}