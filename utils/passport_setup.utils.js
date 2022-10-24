import User from "@models/user.model";
import bcrypt from "bcryptjs";
import { Strategy as LocalStrategy } from "passport-local";

const validatePassword = async function (password, userPassword) {
    return await bcrypt.compare(password, userPassword);
};

const localStrategySetup = function (passport) {
    passport.use(
        new LocalStrategy(async function (username, password, done) {
            try {
                // Check if user exists or not
                const user = await User.findOne({ username }, "+password");
                const errMessage = {
                    message: "Incorrect email or password",
                };
                if (!user) return done(null, false, errMessage);

                // If user exists, validate password
                const isValidPassword = await validatePassword(
                    password,
                    user.password
                );
                if (!isValidPassword) return done(null, false, errMessage);

                // If everything goes right, return the user.
                return done(null, user);
            } catch (err) {
                return done(err);
            }
        })
    );

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};

export default localStrategySetup;
