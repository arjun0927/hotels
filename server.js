const express = require('express');
const app = express();
const personRouter = require('./routes/personRoute')
const menuRouter = require('./routes/menuRoute')
const bodyParser = require('body-parser')
const db = require('./db')

app.use(bodyParser.json())// req.body


app.use('/person',personRouter);
app.use('/menu',menuRouter);
app.listen(3000, () => {
	console.log("server is connected on 3000")
})