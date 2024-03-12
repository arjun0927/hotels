const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Person = require('./model/Person');

// Configure local strategy for Passport
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await Person.findOne({ username });
        if (!user) {
            return done(null, false, { message: "Invalid Username" });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: "Invalid Password" });
        }
    } catch (error) {
        return done(error);
    }
}));

module.exports = passport;
