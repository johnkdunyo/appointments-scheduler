const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

// jwt options
const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secretKey2020",
};

const strategy = new JwtStrategy(options, async (payload, done) => {

    try {
        
        // console.log(payload)
        done(null, payload)

    } catch (error) {
        next(error)
        done(error)
    }
})


passport.use('jwt', strategy);

module.exports = passport;