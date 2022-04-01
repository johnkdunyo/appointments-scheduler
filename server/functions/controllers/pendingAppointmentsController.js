const {db} = require("../utils/db_connection");
const PendingAppointment = require("../models/pendingAppointmentsModel");
const pendingAppointmentRef = db.collection("appointments-pending");

exports.addPendingAppointment = async(req, body, next) => {

    try {

        const dateNow = new Date();
        const docID = `pendingAppt`.concat(Date.parse(dateNow));
        const newPendingAppointment = new PendingAppointment (
            docID,
            req.body.title,
            req.body.description,
            req.body.duration,
            req.body.location,
            req.body.availabilities
        );

        const { ...data} = newPendingAppointment;
        const result =  await pendingAppointmentRef.doc(docID).set(data);

        return res.status(200).json({
            message: "Appointment added successfully"
        })
        
    } catch (error) {
        next(error)
    }
}