const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const Schema = mongoose.Schema;


const AppointmentSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    duration: {
        type: String,
        required:true
    },
    status: {
        type: String,
        required: true,
        default: 'pending',
        enum: ['pending', 'booked']
    },
    // pending has ...  availabilites[ie dates and times]
    // booked has [datetime]
    bookedDate: Date,
    availabilities: [],
    createdAt: {
        type: Date,
        default: Date.now(),
        required
    },

});

module.exports = mongoose.model('Appointments', AppointmentSchema);
