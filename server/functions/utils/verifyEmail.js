const { admin } = require("./db_connection")


exports.verifyEmail = async(req, res, next) => {
    const sentUser = req.body.user;
    try {
      const customToken = await admin.auth().createCustomToken(sentUser.uid);
      await firebase.auth().signInWithCustomToken(customToken);
      const mycurrentUser = firebase.auth().currentUser;
      await mycurrentUser.sendEmailVerification();
      res.locals.data = mycurrentUser;
      next();
    } catch (err) {
      next(err);
    }
  };