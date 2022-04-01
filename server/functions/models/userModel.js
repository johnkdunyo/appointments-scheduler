/* eslint-disable require-jsdoc */
class User {
  constructor(id, firstName, lastName, email, password, isVerified) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.isVerified = isVerified;
  }
}

module.exports = User;
