/* eslint-disable max-len */
const {db} = require("../utils/db_connection");
const PendingAppointment = require("../models/pendingAppointmentsModel");
const pendingAppointmentRef = db.collection("appointments-pending");

exports.addPendingAppointment = async (req, res, next) => {
  try {
    const dateNow = new Date();
    const docID = "pendingAppt".concat(Date.parse(dateNow));
    const newPendingAppointment = new PendingAppointment(
        docID,
        req.user.id,
        req.body.title,
        req.body.description,
        req.body.duration,
        req.body.location,
        req.body.availabilities,
    );

    const {...data} = newPendingAppointment;
    await pendingAppointmentRef.doc(docID).set(data);

    return res.status(200).json({
      message: "Pending Appointment added successfully",
    });
  } catch (error) {
    next(error);
  }
};


exports.getPendingAppointment = async (req, res, next ) => {
  try {
    console.log(req.user);
    const result = await pendingAppointmentRef.where("userID", "==", req.user.id).get();
    console.log(result);
    if (result.size === 0) {
      return res.status(400).json({
        message: "No pending appointments found for user",
      });
    }

    // put all avalaible appointments in a array
    const allAppointments = [];

    // console.log(allData);
    result.forEach((doc) => {
      const appointment = new PendingAppointment(
          doc.get("userID"),
          doc.get("id"),
          doc.get("title"),
          doc.get("description"),
          doc.get("duration"),
          doc.get("location"),
          doc.get("availabilities"),
      );
      allAppointments.push({...appointment});
    });
    // console.log(allAppointments);

    return res.status(200).json({
      message: "Query executed successfully",
      data: allAppointments,

    });
  } catch (error) {
    next(error);
  }
};
