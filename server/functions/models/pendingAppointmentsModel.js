/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
class PendingAppointment {
  constructor( id, title, description, duration, location, availabilities) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.location = location;
    this.availabilities = availabilities;
  }
}


module.exports = PendingAppointment;
