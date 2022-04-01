const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes/routes");


// basic express app
const app = express();

// configure passport
require("./middlewares/passport");

// configure middlerware
app.use(cors());
app.use(routes);

// default route
app.get("/", (req, res)=> {
  return res.status(200).send("Welcome");
});


// internal server error handling
app.use((err, req, res, next) => {
  console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";
  return res.status(err.statusCode).json({
    message: err.message,
  });
});


exports.app = functions.https.onRequest(app);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
