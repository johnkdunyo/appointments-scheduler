const router = require('express').Router();
const passport = require('passport');


const { userSignUp, userSignIn } = require('../controllers/authController');
const { addAppointment, getAllAppointments, getAllAppointmentByID, bookAppointment } = require('../controllers/appointmentController');

router.post('/register', userSignUp);
router.post('/signin', userSignIn);

router.post('/appointments/add', passport.authenticate('jwt', { session:false}), addAppointment);
router.get('/appointments', passport.authenticate('jwt', {session:false}), getAllAppointments);
router.get('/appointments/:id', passport.authenticate('jwt', {session:false}), getAllAppointmentByID);

router.put('/appointments/:id', passport.authenticate('jwt', {session:false}), bookAppointment);

module.exports = router;