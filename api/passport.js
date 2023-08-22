const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

/**
 * This information must be provided via environment variable
 */
const secretValue = 'THE_SECRET'

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: secretValue,
    },
    function (jwtPayload, done) {
      return done(null, jwtPayload);
    }
  )
);
