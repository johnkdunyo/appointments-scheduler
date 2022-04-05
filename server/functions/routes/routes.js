/* eslint-disable max-len */
// eslint-disable-next-line new-cap
const router = require("express").Router();
const passport = require("passport");


const {userSignUp, userSignIn, verifyEmail} = require("../controllers/authController");
const {addBookedAppointment, getAllBookedApppointments} = require("../controllers/bookedAppointmentsController");
const {addPendingAppointment, getPendingAppointment} = require("../controllers/pendingAppointmentsController");

router.post("/signup", userSignUp);
router.post("/signin", userSignIn);
router.get("/verifyemail", verifyEmail);

router.post("/appointments/booked", passport.authenticate("jwt", {session: false}), addBookedAppointment);
router.get("/appointments/booked", passport.authenticate("jwt", {session: false}), getAllBookedApppointments);

router.post("/appointments/pending", passport.authenticate("jwt", {session: false}), addPendingAppointment);
router.get("/appointments/pending", passport.authenticate("jwt", {session: false}), getPendingAppointment);


module.exports = router;
