import passport from "passport";
import passportJWT from "passport-jwt";
import { userRepository } from "@repository";

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY || "THE_SECRET",
    },
    (jwtPayload, done) => {
      const user = userRepository.findOne(jwtPayload.storeId);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    }
  )
);
