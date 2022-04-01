/* eslint-disable max-len */
const router = require("express").Router();
const passport = require("passport");


const {userSignUp, userSignIn, verifyEmail} = require("../controllers/authController");
const {addBookedAppointment, getAllBookedApppointments} = require("../controllers/bookedAppointmentsController");

router.post("/signup", userSignUp);
router.post("/signin", userSignIn);
router.get("/verifyemail", verifyEmail);

router.post("/appointments/booked", passport.authenticate("jwt", {session: false}), addBookedAppointment);
router.get("/appointments/booked", passport.authenticate("jwt", {session: false}), getAllBookedApppointments);

module.exports = router;
