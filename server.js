const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('./auth');
const personRouter = require('./routes/personRoute');
const menuRouter = require('./routes/menuRoute');

require('dotenv').config();
require('./db'); // Assuming your database connection setup is in this file

const PORT = process.env.PORT || 3000;

// Middleware function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
    next();
};
app.use(bodyParser.json());
app.use(logRequest);
app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', { session: false });

app.get('/', (req, res) => {
    res.send("Welcome to our Hotel");
});

// Protecting person routes with authentication
app.use('/person', personRouter);
app.use('/menu', menuRouter);

app.listen(PORT, () => {
    console.log(`Server is connected on port ${PORT}`);
});
