const { default: mongoose } = require('mongoose');
const Appointment = require('../models/Appointments');

exports.addAppointment = async (req, res, next) => {
    console.log(req.body);

    try {
        // check if user has logged in
        const user = req.user;
        if(!user){
            return res.status(401).json({
                message: "User must be login to access this resource"
            })
        };
        const newAppointment = new Appointment(req.body);
        newAppointment.user = user.id;
        console.log(newAppointment)
        // console.log(req)

        await newAppointment.save();

        return res.status(200).json({
            message: "Appointment added successfully"
        })

        
    } catch (error) {
        next(error)
    }
};


exports.getAllAppointments = async (req, res, next) => {
    console.log(req)
    try {
        // we get all appointments by the users id
        const user = req.user;
        if(!user){
            return res.status(401).json({
                message: "User must be logged in to access this resource"
            })
        };

        const appointment = await Appointment.find({user: user.id}).populate('user').exec();
        // the populate replaces user's id in the appointment doc with the user's objec doc
        return res.status(200).json({
            message: "Query successfully",
            data: appointment
        })
        
    } catch (error) {
        next(error)
    }
};


exports.getAllAppointmentByID = async(req, res, next) => {
    // this gets all appointments by its id... note,
    // console.log(req.params.id)
    try {
        const user = req.user;
        if(!user){
            return res.status(401).json({
                message: "User must be logged in to access this resource"
            })
        };
        // check is the id passed is valid
        if(!mongoose.isValidObjectId(req.params.id)){
            return res.status(401).json({
                message: "Query failed, no appointment with id provided exists"
            });
        }
        const appointment = await Appointment.findById(req.params.id).exec();
        return res.status(200).json({
            message: "Query successfully",
            data: appointment
        })


        // road clear, lets get in
        
    } catch (error) {
        next(error)
    }
};

exports.bookAppointment = async(req,res, next) => {
    // update an appointment by its id
    // gets a booked date from list of dates returned
    // change status from pending to booked
    try {
        // first check if id is valid and return error
        if(!mongoose.isValidObjectId(req.params.id)){
            return res.status(401).json({
                message: "Invalid appointment id passed"
            })
        }
        // get list of all dates in the appointment
        const appointment = await Appointment.findById(req.params.id).exec();

        // check if the date the client passed if among the list
        if(!appointment.availabilities.includes(req.body.bookedDate)){
            return res.status(401).json({
                message: "Booked date can be found in appointments availabilities"
            })
        }
        appointment.bookedDate = req.body.bookedDate;
        appointment.status = 'booked';
        await appointment.save();
        // console.log(appointment.availabilities);

        return res.status(200).json({
            message: "Appointment Booked"
        });
        


        
    } catch (error) {
        next(error)
    }
}