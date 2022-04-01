/* eslint-disable max-len */
// function send orders via mail or whatsapp
const nodemailer = require("nodemailer");


// const date = new Date(Date.now()).toISOString().split('T')[0];

const mailer = (email, verificatiomTokenLink) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    port: 587, // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
      user: "developerr411@gmail.com",
      pass: process.env.gPassword,
    },
    secure: false,
  });

  const mailData = {
    from: "developerr411@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Verify your email on Appointments Scheduler",
    text: "Hi, please find attache BSL Lunch orders for ",
    html: `<h1><b>Hey there!, Welcome to Appointments Scheduler. </b> </h1> <br/> 
    <p> Please copy this ling to your browser of click here to confirm your email ${verificatiomTokenLink} 
    </p>
    <br><br/>
    <a href="${verificatiomTokenLink}">${verificatiomTokenLink}</a>
    
    <br><br/>
    <br><br/>

    <p>thank you</p>
    `,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = mailer;
