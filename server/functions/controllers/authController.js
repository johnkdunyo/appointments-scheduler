/* eslint-disable max-len */
const {db} = require("../utils/db_connection");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailer = require("../utils/mailer");
const crypto = require("crypto");


const usersRef = db.collection("users");

exports.userSignUp = async (req, res, next) => {
  try {
    // check if user with email exists already
    const users = await usersRef.where("email", "==", req.body.email).get();

    if (users.size > 0) {
      return res.status(400).json({
        message: "Email exists already, please consider signing in",
      });
    }
    // creat a new id with firstname and datetime
    const dateNow = new Date();
    const id = req.body.firstName.concat(Date.parse(dateNow));
    const user = new User();
    user.id = id;
    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.password = await bcrypt.hash(req.body.password, 15);
    user.isVerified = false;


    // const docRef =  await usersRef.get();
    const {...userData} = user;
    await usersRef.doc(id).set(userData);
    // console.log(dd)

    // TODO: send verificatiom email to user's email
    // get request embedding the user id and verification token
    // remenber to change the url when you deploy
    const token = crypto.randomBytes(5).toString("hex");
    const verificatiomTokenLink = `http://localhost:5001/appointments-scheduler-2022/us-central1/app/verifyemail/?id=${id}&token=${token}`;
    mailer(userData.email, verificatiomTokenLink);


    return res.status(200).json({
      message: "User added successfully, proceed to verify email",
    });
  } catch (error) {
    next(error);
  }
};


exports.userSignIn = async (req, res, next) => {
  try {
    // const user = await usersRef.where('email', '==', req.body.email).get();
    const user = await usersRef.doc("jon1648543068000").get();
    // for ( const user in user ){
    //     console.log(user)
    // }
    if (user.size === 0) {
      return res.status(400).json({
        message: "User with email provided does not exist",
      });
    }
    // store user data
    const userData = user.data();
    // check password
    const checkPass = await bcrypt.compare(req.body.password, userData.password);
    if (!checkPass) {
      return res.status(400).json({
        message: "Password incorrect",
      });
    }

    // crreate and sign token
    const token = jwt.sign(
        {
          id: userData.id,
          fullname: userData.firstName.concat(" ", userData.lastName),
          email: userData.email,
        },
        "secretKey2020",
        {
          expiresIn: "3d",
        },
    );


    return res.status(200).json({
      message: "success",
      token,
      data: {
        id: userData.id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        isVerified: userData.isVerified,
      },
    });
  } catch (error) {
    next(error);
  }
};


exports.verifyEmail = async (req, res, next) => {
  // console.log(req)
  try {
    const {id} = req.query;

    const user = await usersRef.doc(id).get();

    // if user does not exist, then the is is invalid, user should try creating account again or contact the admin
    if (!user.exists) {
      return res.status(400).json({
        message: "Invalid link, please contact admin",
      });
    }

    // check if user email is verified already
    const userData = user.data();
    if (userData.isVerified) {
      return res.status(400).json({
        message: "Email verified already, no need verifying it already",
      });
    }


    // update isVerified to true
    await usersRef.doc(id).update({isVerified: true});

    // done
    return res.status(200).json({
      message: "Email verified successfully",
    });
  } catch (error) {
    next(error);
  }
};
