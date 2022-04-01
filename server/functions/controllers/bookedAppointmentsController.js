const {db} = require("../utils/db_connection");
const bookedAppointment = require("../models/bookedAppointmentsModel")

const bookedAppointmentRef = db.collection("appointments-booked");

exports.addBookedAppointment = async(req, res, next) => {
    // get userID from bearertoken
    // already added to req available at user via passport

    try {
        const dateNow = new Date()
        const docID = `bookedAppt`.concat(Date.parse(dateNow))
        const newBookedAppointment = new bookedAppointment(
            docID,
            req.user.id,
            req.body.title,
            req.body.description,
            req.body.time,
            req.body.date,
            req.body.location
        );

        const { ...docData} = newBookedAppointment;
        const result = await bookedAppointmentRef.doc(docID).set(docData)

        // console.log(newBookedAppointment);

        return res.status(200).json({
            message: "Appointment added successful",
            newBookedAppointment
        })
        

    } catch (error) {
        next(error)
    }
};

// get all booked appoitments by user's id
exports.getAllBookedApppointments = async(req, res, next) => {

    try {
        const result = await bookedAppointmentRef.where('userID', '==', req.user.id).get();

        if(result.size===0){
            return res.status(400).json({
                message: "No appointments found for user"
            })
        }
        
        // put all avalaibel appointments in a array
        const allAppointments = [];


        // console.log(allData);
        result.forEach((doc) => {
            const appointment = new bookedAppointment(
                doc.get('id'),
                doc.get('userID'),
                doc.get('title'),
                doc.get('description'),
                doc.get('time'),
                doc.get('time'),
                doc.get('location')
            ) 
            allAppointments.push({...appointment})
        })
        // console.log(allAppointments);

        return res.status(200).json({
            message: "Query executed successfully",
            data: allAppointments
            
        })
        
    } catch (error) {
        next(error)
    }
}