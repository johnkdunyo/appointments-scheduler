/* eslint-disable require-jsdoc */
class bookedAppointment {
  constructor( id, userID, title, description, time, date, location) {
    this.id=id;
    this.userID=userID;
    this.title=title;
    this.description=description;
    this.time=time;
    this.date=date;
    this.location=location;
  }
}

module.exports = bookedAppointment;
