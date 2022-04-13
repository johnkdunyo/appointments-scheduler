const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AppointmentSchema = new Schema({
    title : {
        type: String,
        required: true,
        trim
    },
    description: {
        type: String,
        required: true,
        trim
    },
    location: {
        type: String,
        required: true
    },
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // status is any of the following: pending, booked, 
    status: {
        type: String,
        required: true,
        default: 'pending',
        enum: ['pending', 'booked']
    },
    duration: {
        type: String,
        required:true
    },
    // pending has ...  availabilites[ie dates and times]
    // booked has [datetime]
    bookedDate: Date,
    availabilities: {
        type: [],
        required: false
    }

});

module.exports = mongoose.model('Appointments', AppointmentSchema);